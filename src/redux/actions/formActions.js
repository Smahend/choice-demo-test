export const UPDATE_FORM = 'UPDATE_FORM';
export const RESET_FORM = 'RESET_FORM';

export const updateForm = (step, data) => ({
  type: UPDATE_FORM,
  payload: { step, data },
});

export const resetForm = () => ({
  type: RESET_FORM,
});
