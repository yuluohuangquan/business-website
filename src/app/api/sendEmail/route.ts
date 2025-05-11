import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, reason, details } = body;

    // 配置SMTP服务器
    const transporter = nodemailer.createTransport({
      service: 'qq', // 使用QQ邮箱
      auth: {
        user: process.env.QQ_EMAIL, // QQ邮箱地址
        pass: process.env.QQ_EMAIL_PASSWORD, // QQ邮箱授权码
      },
    });

    // 邮件内容
    const mailOptions = {
      from: process.env.QQ_EMAIL, // 发件人邮箱
      to: process.env.ADMIN_EMAIL || process.env.QQ_EMAIL, // 收件人邮箱，如果没有设置ADMIN_EMAIL则发送给自己
      subject: `来自网站的咨询: ${reason}`, // 邮件主题
      html: `
        <h2>来自网站的咨询信息</h2>
        <p><strong>姓名:</strong> ${name}</p>
        <p><strong>邮箱:</strong> ${email}</p>
        <p><strong>电话:</strong> ${phone}</p>
        <p><strong>咨询原因:</strong> ${reason}</p>
        <p><strong>详细内容:</strong></p>
        <p>${details.replace(/\n/g, '<br>')}</p>
      `, // 使用HTML格式的邮件正文
    };

    // 发送邮件
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: '邮件发送成功' }, { status: 200 });
  } catch (error: unknown) {
    console.error('邮件发送失败', error);
    const errorMessage = error instanceof Error ? error.message : '未知错误';
    return NextResponse.json({ message: '邮件发送失败', error: errorMessage }, { status: 500 });
  }
}