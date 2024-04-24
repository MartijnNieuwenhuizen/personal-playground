export const config = {
  runtime: "nodejs",
};

export function GET(request) {
  return new Response(`Hello from the TEST API`);
}
