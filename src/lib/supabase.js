import "react-native-url-polyfill/auto";
import { SUPABASE_URL, SUPABASE_KEY } from "@env";
import { createClient } from "@supabase/supabase-js";

export default createClient(SUPABASE_URL, SUPABASE_KEY);
