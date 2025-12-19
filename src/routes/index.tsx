import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState, useRef, useCallback, useMemo } from 'react'
import { Settings } from 'lucide-react'
import {
  SettingsDialog,
  ChatMessage,
  LoadingIndicator,
  ChatInput,
  Sidebar,
  WelcomeScreen,
  TopBanner
} from '../components'
import { useConversations, useAppState, store, actions } from '../store'
import { genAIResponse, type Message } from '../utils'

function Home() {
 
  return (
    <div className="relative flex flex-col gap-8 h-screen bg-gray-200 justify-between px-4 mx-auto max-w-screen-xl">
    <h1 class="text-center text-xl">header</h1>
    <p class="text-lg">para</p>
    </div>
  )
}

export const Route = createFileRoute('/')({
  component: Home,
})
