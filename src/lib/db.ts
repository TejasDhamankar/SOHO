import mongoose from "mongoose";

declare global {
  var mongooseConnection:
    | {
        conn: typeof mongoose | null;
        promise: Promise<typeof mongoose> | null;
      }
    | undefined;
}

const MONGODB_URI = process.env.MONGODB_URI ?? "";

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI is not defined");
}

const cached = global.mongooseConnection ?? {
  conn: null,
  promise: null
};

global.mongooseConnection = cached;

export async function connectDb() {
  if (cached.conn) {
    return cached.conn;
  }

  cached.promise ??= mongoose.connect(MONGODB_URI, {
    bufferCommands: false
  });

  cached.conn = await cached.promise;
  return cached.conn;
}
