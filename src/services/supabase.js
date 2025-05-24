import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://mdajdfbnhtgiwbutpzcj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1kYWpkZmJuaHRnaXdidXRwemNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjMwMjYxMjIsImV4cCI6MjAzODYwMjEyMn0.ppDVHeYd_gksU1r6k_699mfhEJ8n2ixSJ-o-VCzTnt0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
