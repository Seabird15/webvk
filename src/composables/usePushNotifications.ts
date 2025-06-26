// src/composables/usePushNotifications.ts
import { onMounted } from 'vue'
import { Capacitor } from '@capacitor/core'
import { PushNotifications } from '@capacitor/push-notifications'
import { db } from '../firebase'
import { setDoc, doc } from 'firebase/firestore'

async function guardaTokenEnFirestore(token: string) {
  // Puedes asociar el token a un usuario si tienes auth, aquí lo guardamos simple
  await setDoc(doc(db, 'pushTokens', token), { token, createdAt: new Date() })
}

export function usePushNotifications() {
  onMounted(() => {
    if (Capacitor.getPlatform() === 'web') return

    PushNotifications.requestPermissions().then(res => {
      if (res.receive === 'granted') PushNotifications.register()
    })

    PushNotifications.addListener('registration', async ({ value }) => {
      console.log('Token:', value)
      await guardaTokenEnFirestore(value)
    })

    PushNotifications.addListener('pushNotificationReceived', n =>
      console.log('Push recibida', n),
    )

    PushNotifications.addListener(
      'pushNotificationActionPerformed',
      n => console.log('Push abierta', n),
    )
  })
}