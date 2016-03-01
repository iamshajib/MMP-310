var answers = [
  'Maybe.', 'Certainly not.', 'I hope so.', 'Not in your wildest dreams.',
  'There is a good chance.', 'Quite likely.', 'I think so.', 'I hope not.',
  'I hope so.', 'Never!', 'Ahaha! Really?!?',
  'Sorry, bucko.', 'Hell, yes.', 'Hell to the no.', 'The future is bleak.',
  'The future is uncertain.', 'I would rather not say.', 'Who cares?',
  'Possibly.', 'Never, ever, ever.', 'There is a small chance.', 'Yes!'];

document.getElementById('ball').onclick = function () {
  var answer = answers[Math.floor(Math.random() * answers.length)];
  document.getElementById('answerContainer').innerHTML = answer;
};
