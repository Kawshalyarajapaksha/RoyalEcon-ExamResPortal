// supabase-config.js

// Supabase API තොරතුරු මෙතැනට දමන්න
const SUPABASE_URL = 'https://srwnopnlhjnkgvruuqiz.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNyd25vcG5saGpua2d2cnV1cWl6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE1MjQ2NzQsImV4cCI6MjA5NzEwMDY3NH0.oBKRKXDFwvi4lZzCeeNgwvQjCm5Hyzfg2JkZGb0SXQ4';

// Supabase Client එක සකස් කිරීම
const sbClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);