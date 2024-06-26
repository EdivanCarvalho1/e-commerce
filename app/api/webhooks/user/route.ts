import prisma from "@/lib/prisma";
import { IncomingHttpHeaders } from "http";
import { headers } from 'next/headers'
import { NextResponse } from "next/server";
import { Webhook, WebhookRequiredHeaders } from 'svix'

const webhookSecret = process.env.CLERK_WEBHOOK_SECRET || '';

async function handler(request: Request) {
    const payload = await request.json();
    const headersList = headers();
    const heads = {
        'svix-id': headersList.get('svix-id'),
        'svix-timestamp': headersList.get('svix-timestamp'),
        'svix-signature': headersList.get('svix-signature'),
    };
    const wh = new Webhook(webhookSecret);
    let evt: Event | null = null;
    try {
        evt = wh.verify(
            JSON.stringify(payload),
            heads as IncomingHttpHeaders & WebhookRequiredHeaders
        ) as Event
    } catch (error) {
        console.error((error as Error).message);
        return NextResponse.json({}, { status: 400 });
    }
    const eventType: EventType = evt.type
    if (evt.type === 'user.created' || eventType === 'user.updated') {
        const {
            id,
            first_name,
            last_name,
            email_adresses,
            primary_email_adress_id,
            ...attributes
        } = evt.data

        await prisma.user.upsert({
            where: {externalId: id as string},
            create:{
                external: id as string,
                attributes
            },
            update:{
                attributes
            }
        })
    }
    return NextResponse.json({}, {status: 200});
}
type EventType = 'user.created' | 'user.updated' | '*';

type EmailAdressType = {
    id: string,
    email_adress: string
}

type EventDataType = {
    id: string,
    first_name: string,
    last_name: string,
    email_adresses: EmailAdressType[];
    primary_email_adress_id: string;
    attributes: Record<string, string | number>
}

type Event = {
    data: EventDataType;
    object: 'event';
    type: EventType;
}

export const GET = handler;
export const POST = handler;
export const PUT = handler;