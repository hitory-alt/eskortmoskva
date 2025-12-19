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
    <div className="relative flex flex-col gap-8 h-screen bg-gray-200">
    <h1 class="text-center">header</h1>
    <p class="">para</p>
    </div>
  )
}

export const Route = createFileRoute('/')({
  component: Home,
})
