import firebase from '.';

const db = firebase.firestore();

interface Bingo {
  board: string;
  version: string;
  time: string;
}

interface AddBingoDTO {
  userId: string;
  bingo: Bingo;
}

export async function generateUser(): Promise<string> {
  const userRef = await db.collection('users').add({});

  return userRef.id;
}

export async function addBingo({ bingo, userId }: AddBingoDTO): Promise<void> {
  const userRef = await db.collection('users').doc(userId).get();
  const bingos = (await userRef.data()?.bingos) ?? [];

  await db
    .collection('users')
    .doc(userId)
    .update({ bingos: [...bingos, bingo] });
}

export async function checkUser(userId: string): Promise<string | null> {
  const userRef = await db.collection('users').doc(userId).get();

  if (!userRef.data()) return null;

  return userRef.id;
}
