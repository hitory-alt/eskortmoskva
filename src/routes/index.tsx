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
    <div className="relative flex h-screen bg-gray-900">
    <h1>header</h1>
    <p>para</p>
    </div>
  )
}

export const Route = createFileRoute('/')({
  component: Home,
})
