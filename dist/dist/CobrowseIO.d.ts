import type { EventEmitter } from 'events'

type Metrics = { last_alive: Date | null, latency: number | null }
type SessionState = 'active' | 'authorizing' | 'pending' | 'ended'
type DeviceControlState = 'on' | 'off' | 'requested' | 'rejected'

interface Session {
  readonly capabilities: string[]
  readonly metrics: Metrics

  code(): string | undefined
  state(): SessionState

  isActive(): boolean
  isAuthorizing(): boolean
  isPending(): boolean
  isEnded(): boolean

  activate(): Promise<this>
  end(): Promise<this>

  redactionSelectors(): string[]
  unredactionSelectors(): string[]

  agent(): Record<string, unknown> | false

  fullDevice(): boolean
  setFullDevice(state: DeviceControlState): Promise<this>

  remoteControl(): DeviceControlState
  setRemoteControl(state: DeviceControlState): Promise<this>
}

export declare class CobrowseIO extends EventEmitter {
  version: string
  static version: string
  api: string
  license: string
  customData: Record<string, string>
  redactedViews: string[]
  unredactedViews: string[]
  ignoredViews: string[]
  currentSession: Session | null
  trustedOrigins: string[]
  universalLinks: (string | RegExp)[]
  pdfLinks: (string | RegExp)[]
  capabilities: string[]
  registration: boolean

  start(options?: { allowIFrameStart?: boolean }): Promise<CobrowseIO>
  stop(): Promise<CobrowseIO>
  deviceId(): string
  client(): Promise<CobrowseIO>

  createSession(): Promise<Session>
  createSessionCode(): Promise<string>
  getSession(idOrCode: string): Promise<Session>

  confirmRemoteControl: () => Promise<boolean>
  confirmFullDevice: () => Promise<boolean>
  confirmSession: () => Promise<boolean>
  showSessionControls: () => Promise<void>
  hideSessionControls: () => Promise<void>
}

declare const instance: CobrowseIO

export default instance
