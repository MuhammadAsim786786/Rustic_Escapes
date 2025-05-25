import { createClient } from "@supabase/supabase-js";

<<<<<<< HEAD
export const supabaseUrl = "https://mdajdfbnhtgiwbutpzcj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1kYWpkZmJuaHRnaXdidXRwemNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjMwMjYxMjIsImV4cCI6MjAzODYwMjEyMn0.ppDVHeYd_gksU1r6k_699mfhEJ8n2ixSJ-o-VCzTnt0";
=======
export const supabaseUrl = "https://dclaevazetcjjkrzczpc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRjbGFldmF6ZXRjamprcnpjenBjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMyOTIzNDQsImV4cCI6MTk5ODg2ODM0NH0.LGg0M-taoHgKtxCzr9owrb09epnPaO_Yfz6xVE54sIY";
>>>>>>> origin/final-stages
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
