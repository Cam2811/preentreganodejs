import { db } from '../firebase.js';
import { collection, getDocs, doc, getDoc, addDoc, deleteDoc } from 'firebase/firestore';

const productsCollection = collection(db, 'products');

export const getAllProducts = async () => {
  const snapshot = await getDocs(productsCollection);
  const products = [];
  snapshot.forEach(docSnap => {
    products.push({ id: docSnap.id, ...docSnap.data() });
  });
  return products;
};

export const getProductById = async (id) => {
  const docRef = doc(db, 'products', id);
  const docSnap = await getDoc(docRef);
  if (!docSnap.exists()) return null;
  return { id: docSnap.id, ...docSnap.data() };
};

export const createProduct = async (product) => {
  const docRef = await addDoc(productsCollection, product);
  return { id: docRef.id, ...product };
};

export const deleteProduct = async (id) => {
  const docRef = doc(db, 'products', id);
  const docSnap = await getDoc(docRef);
  if (!docSnap.exists()) return false;
  await deleteDoc(docRef);
  return true;
};
