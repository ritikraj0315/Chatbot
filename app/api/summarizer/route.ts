// import { NextResponse } from "next/server";
// import OpenAI from "openai";



// const client = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY!,
// });

// export async function POST(req: Request) {
//   try {
//     const { text } = await req.json();

//     const completion = await client.chat.completions.create({
//       model: "gpt-4.1-mini",
//       messages: [
//         {
//           role: "user",
//           content: `Summarize the following text. Provide:
//           - Short title
//           - 3-5 bullet point summary
//           - Action items (if any)
          
//           Text:
//           ${text}`,
//         },
//       ],
//     });

//     return NextResponse.json({
//       summary: completion.choices[0].message.content,
//     });

//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   } catch (error : any) {
//     console.error("API ERROR:", error);

//     return NextResponse.json(
//       { error: error.message || "Something went wrong" },
//       { status: 500 }
//     );
//   }
// }

