import connectMongoDB from "@/libs/mongodb";
import Homepage from "@/models/homepage";

export async function getHomepageData() {
  await connectMongoDB();
  const topics = await Homepage.find();
  return topics; // Returning plain data instead of NextResponse
}
