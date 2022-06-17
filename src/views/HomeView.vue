<script setup>
import { doc, getDocs, collection, getFirestore } from "firebase/firestore";
import { auth, db } from "../services/firebase";

const colRef = collection(db, 'users')

getDocs(colRef)
  .then(snapshot => {
    // console.log(snapshot.docs)
    let books = []
    snapshot.docs.forEach(doc => {
      books.push({ ...doc.data(), id: doc.id })
    })
    console.log(books)
  })
  .catch(err => {
    console.log(err.message)
  })
</script>

<template>
  <main>
    <button>Log Out</button>
    aaaaaaaaaaaaaaaaaaaaaaaaaaaa
    <RouterLink to="/messenger">Messenger</RouterLink>
  </main>
</template>
