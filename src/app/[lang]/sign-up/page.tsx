"use client"

import { useEffect } from 'react';
import { useParams } from 'next/navigation';
import { SignUp, useClerk } from '@clerk/nextjs';

export default function SineUp() {
    const { lang } = useParams(); // 获取路由参数
    const { user } = useClerk();

    useEffect(() => {
        if (user) {
            // zxc(user?.id)
        }
    }, [user]);

    const zxc = async (name) => {
        console.log("asd")
        const res = await fetch('/api/test', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
            }),
        })
    }

    return <>SineUp {lang}
        <SignUp />
    </>;
}