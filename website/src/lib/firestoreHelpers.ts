import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from './firebase'

export async function saveLead(data: any) {
  const col = collection(db, 'leads')
  return addDoc(col, { ...data, createdAt: serverTimestamp() })
}

export async function saveSupportTicket(data: any) {
  const col = collection(db, 'supportTickets')
  return addDoc(col, { ...data, createdAt: serverTimestamp() })
}
