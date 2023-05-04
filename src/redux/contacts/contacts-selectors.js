import { createSelector } from '@reduxjs/toolkit';

export const selectLoading = state => state.contacts.contacts.loading;

export const selectFilter = state => state.contacts.filter;

export const selectAllTasks = state => state.contacts.contacts.items;

export const selectVisibleFilter = createSelector(
  [selectAllTasks, selectFilter],
  (contacts, filter) => {
    const workingFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(workingFilter)
    );
  }
);