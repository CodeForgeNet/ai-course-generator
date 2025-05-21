import { db } from "@/configs/db";
import { CourseList } from "@/configs/Schema";
import { eq } from "drizzle-orm";

export async function POST(req) {
  const body = await req.json();
  const { courseId, imageUrl } = body;

  if (!courseId || !imageUrl) {
    return new Response(JSON.stringify({ error: "Missing fields" }), {
      status: 400,
    });
  }

  try {
    await db
      .update(CourseList)
      .set({ courseBanner: imageUrl })
      .where(eq(CourseList.courseId, courseId));

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "DB update failed" }), {
      status: 500,
    });
  }
}
