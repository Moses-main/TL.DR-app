import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();
  const buttonIndex = data.untrustedData.buttonIndex;

  // Handle frame navigation
  if (buttonIndex === 1) {
    return NextResponse.json({
      image: `${process.env.NEXT_PUBLIC_URL}/frames/digest/1.png`,
      buttons: [{ label: "Next", action: "post" }],
    });
  }

  // Subscription options
  return NextResponse.json({
    image: `${process.env.NEXT_PUBLIC_URL}/frames/digest/subscribe.png`,
    buttons: [
      { label: "#dev", action: "post" },
      { label: "#memes", action: "post" },
    ],
  });
}
