export function validateTitle(val) {
  const trimed = val.trim();
  if (trimed.length <= 3) return 'The title is too short';

  // leidzia tik raides
  if (!/^[a-z ,.'-]+$/i.test(trimed)) return 'No numbers please';

  // no erorr
  return false;
}
