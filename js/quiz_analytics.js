import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabaseUrl = '<YOUR_SUPABASE_URL>';
const supabaseAnonKey = '<YOUR_SUPABASE_ANON_KEY>';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

document.addEventListener('change', async (event) => {
  const quizEl = event.target.closest('.quiz-item');
  if (!quizEl) return;
  const quizId = quizEl.dataset.quizId || 'unknown';
  const selected = Array.from(
    quizEl.querySelectorAll('input[type="checkbox"]:checked, input[type="radio"]:checked')
  ).map((input) => input.value);

  const payload = {
    quiz_id: quizId,
    response: JSON.stringify(selected),
    timestamp: new Date().toISOString(),
  };
  const { error } = await supabase.from('quiz_responses').insert([payload]);
  if (error) {
    console.error('Supabase insert error:', error);
  }
});