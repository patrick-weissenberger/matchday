import { createClient } from "@supabase/supabase-js"
import type { Database } from "@/databases/supabase/types/supabase.types"





const supabase = createClient<Database>(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_ANON_KEY)





export default supabase