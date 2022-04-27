async function newFormHandler(event) {
  event.preventDefault();
  const workoutDate = new Date (document.querySelector('#bulmaCalender').value);
  const workoutTypeSelect = document.querySelector('.workoutType')
  const workoutType = workoutTypeSelect.options[workoutTypeSelect.selectedIndex].value;
  console.log(workoutType);
  const workoutName = document.querySelector('.workoutName').value;
  const workoutLength = document.querySelector('.workoutLength').value;
  const workoutReps = document.querySelector('.workoutReps').value;
  const workoutNotes = document.querySelector('.workoutNotes').value;
  // The following is a ternary operator. It checks to see if has_nuts is checked. If it is, it will return true, otherwise, it will return false.
  // Send fetch request to add a new dish
  if ( workoutDate && workoutType && workoutName) {
    const response = await fetch(`/api/workout`, {
      method: 'POST',
      body: JSON.stringify({
        workoutDate,
        workoutType,
        workoutName,
        workoutLength,
        workoutReps,
        workoutNotes,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to get workout');
    }
  }
}

document
  .querySelector('#submitWorkout')
  .addEventListener('submit', newFormHandler);
