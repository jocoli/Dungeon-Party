import { createClient } from '@supabase/supabase-js'

const URL = 'https://kbottidfihsvmelkikdn.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtib3R0aWRmaWhzdm1lbGtpa2RuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkyMjc5OTgsImV4cCI6MjAxNDgwMzk5OH0.p_kDvGhiXWnS7c8eCYKOM5dBaEnPPizl-K3wbndjiAg';

export const supabase = createClient(URL, API_KEY);
