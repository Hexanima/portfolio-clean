export default function IsError(error: any): boolean {
  return error instanceof Error;
}
