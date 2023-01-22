import { initializeApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { getStorage } from 'firebase-admin/storage';
import { getAuth } from 'firebase-admin/auth';

export const admin = { initializeApp, getStorage, getAuth };

initializeApp();
export const db = getFirestore();