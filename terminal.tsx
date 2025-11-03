"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"

interface LogEntry {
  text: string
  delay: number
  isRed?: boolean
}

export function Terminal() {
  const [logs, setLogs] = useState<{ text: string; isRed?: boolean }[]>([])
  const [input, setInput] = useState("")
  const [isAutoSequenceRunning, setIsAutoSequenceRunning] = useState(false)
  const [showInteractivePrompt, setShowInteractivePrompt] = useState(false)
  const terminalRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Auto-scroll to bottom
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [logs])

  // Focus input on click
  useEffect(() => {
    const handleClick = () => {
      inputRef.current?.focus()
    }
    document.addEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
  }, [])

  const autoSequenceLogs: LogEntry[] = [
    { text: "[SYSTEM] Initializing Matrix Terminal v2.1.3...", delay: 200 },
    { text: "[SYSTEM] Loading neural interface modules...", delay: 300 },
    { text: "[MODULE] crypto.dll loaded successfully", delay: 100 },
    { text: "[MODULE] network.dll loaded successfully", delay: 100 },
    { text: "[MODULE] exploit.dll loaded successfully", delay: 100 },
    { text: "[MODULE] ddos.dll loaded successfully", delay: 100 },
    { text: "[MODULE] botnet.dll loaded successfully", delay: 100 },
    { text: "[MODULE] ransomware.dll loaded successfully", delay: 100 },
    { text: "[MODULE] keylogger.dll loaded successfully", delay: 100 },
    { text: "[MODULE] rootkit.dll loaded successfully", delay: 100 },
    { text: "[WARNING] Unauthorized access attempt detected...", delay: 400, isRed: true },
    { text: "GHOST-SHELL v6.66.6 - Infiltration mode activated", delay: 300 },
    { text: ">> Stealth module loading...", delay: 200 },
    { text: "Rootkit injection", delay: 150 },
    { text: "[✓] KERNEL HOOK installation complete", delay: 200, isRed: true },
    { text: "Firewall bypass module load", delay: 150 },
    { text: "[✓] FIREWALL BYPASS activated", delay: 200, isRed: true },
    { text: "Antivirus neutralization", delay: 150 },
    { text: "[✓] AV/EDR detection evasion successful", delay: 200, isRed: true },
    { text: ">> [CRITICAL] Target network penetration initiated...", delay: 300, isRed: true },
    { text: ">>> 172.16.0.1 - Ports 22,80,443,3389,5985 COMPROMISED", delay: 200, isRed: true },
    { text: ">>> 172.16.0.15 - Ports 22,80,443,3389,5985 COMPROMISED", delay: 200, isRed: true },
    { text: ">>> 172.16.0.23 - Ports 22,80,443,3389,5985 COMPROMISED", delay: 200, isRed: true },
    { text: ">>> 172.16.0.45 - Ports 22,80,443,3389,5985 COMPROMISED", delay: 200, isRed: true },
    { text: ">>> 172.16.0.67 - Ports 22,80,443,3389,5985 COMPROMISED", delay: 200, isRed: true },
    { text: ">>> 172.16.0.89 - Ports 22,80,443,3389,5985 COMPROMISED", delay: 200, isRed: true },
    { text: ">>> 172.16.0.102 - Ports 22,80,443,3389,5985 COMPROMISED", delay: 200, isRed: true },
    { text: ">>> 172.16.0.156 - Ports 22,80,443,3389,5985 COMPROMISED", delay: 200, isRed: true },
    { text: ">> [DANGER] Zero-day exploit execution...", delay: 300, isRed: true },
    { text: "CVE-2024-XXXX (undisclosed) loading", delay: 200 },
    { text: "[!] 172.16.0.45: DOMAIN ADMIN privileges hijacked!", delay: 250, isRed: true },
    { text: "[!] 172.16.0.67: Database server infiltration!", delay: 250, isRed: true },
    { text: "[!] 172.16.0.102: Backup server access successful!", delay: 250, isRed: true },
    { text: "[!] AD domain completely seized!", delay: 250, isRed: true },
    { text: ">> [HIGH RISK] Ransomware payload deployment...", delay: 300, isRed: true },
    { text: "CRYPTOLOCKER generation", delay: 200 },
    { text: "[✓] Encryption virus (47.3MB) deployment complete", delay: 250, isRed: true },
    { text: "C&C server (TOR) connection", delay: 200 },
    { text: "[✓] Anonymous command control server connected", delay: 250, isRed: true },
    { text: "[!] All file encryption initiated...", delay: 250, isRed: true },
    { text: ">> [CRITICAL] Complete system privilege takeover...", delay: 300, isRed: true },
    { text: "SYSTEM TOKEN hijacking", delay: 200 },
    { text: "[✓] NT AUTHORITY\\SYSTEM privileges acquired", delay: 250, isRed: true },
    { text: "Security policy neutralization", delay: 200 },
    { text: "[✓] UAC, DEP, ASLR all disabled", delay: 250, isRed: true },
    { text: "[!] Complete system control established!", delay: 250, isRed: true },
    { text: ">> [DATA BREACH] Massive confidential data collection...", delay: 300, isRed: true },
    { text: "Scan targets: *.docx, *.xlsx, *.pdf, *.ppt, *.sql, *.db", delay: 200 },
    { text: "Confidential files discovered: 15,847", delay: 200 },
    { text: "Personal/financial information extraction", delay: 200 },
    { text: "[✓] Credit card information 2,340 records collected", delay: 250, isRed: true },
    { text: "[✓] Social security numbers 8,920 records collected", delay: 250, isRed: true },
    { text: "[✓] Corporate confidential documents 4.7GB stolen", delay: 250, isRed: true },
    { text: ">> [STEALTH] Complete trace removal and persistence establishment...", delay: 300 },
    { text: "System log complete deletion", delay: 200 },
    { text: "[✓] Windows event log removal complete", delay: 250, isRed: true },
    { text: "Permanent backdoor installation", delay: 200 },
    { text: "[✓] Boot-time auto-execute backdoor installed", delay: 250, isRed: true },
    { text: "[✓] Registry/service concealment complete", delay: 250, isRed: true },
    { text: "████████████████████████████████████████", delay: 300 },
    { text: "██      MISSION COMPLETE - PWNED!     ██", delay: 300, isRed: true },
    { text: "██                                    ██", delay: 100 },
    { text: "██   Stolen data: 94.8GB              ██", delay: 150, isRed: true },
    { text: "██    Compromised systems: 68         ██", delay: 150, isRed: true },
    { text: "██    Infected users: 1,247           ██", delay: 150, isRed: true },
    { text: "██    Time elapsed: 2min 47sec        ██", delay: 150, isRed: true },
    { text: "██                                    ██", delay: 100 },
    { text: "████████████████████████████████████████", delay: 300 },
    { text: "System access privileges secured... Advanced commands activated", delay: 400 },
    { text: "[SYSTEM] Scan mode enabled", delay: 300, isRed: true },
    { text: "[NETWORK] Scanning for available targets...", delay: 400 },
    { text: "[SCAN] Found target: 192.168.1.1 (Router)", delay: 150 },
    { text: "[SCAN] Found target: 192.168.1.105 (Windows PC)", delay: 150 },
    { text: "[SCAN] Found target: 192.168.1.203 (Android Device)", delay: 150 },
    { text: "[SCAN] Found target: 10.0.0.1 (Gateway)", delay: 150 },
    { text: "[NETWORK] Expanding scan to Korean networks...", delay: 300 },
    { text: "[SCAN] Found target: 211.115.194.23 (Seoul, KR) - Government Server", delay: 200 },
    { text: "[SCAN] Found target: 175.223.45.112 (Seoul, KR) - Banking System", delay: 200 },
    { text: "[SCAN] Found target: 203.241.89.67 (Busan, KR) - Corporate Network", delay: 200 },
    { text: "[SCAN] Found target: 121.78.156.34 (Seoul, KR) - University Network", delay: 200 },
    { text: "[SCAN] Found target: 218.145.23.89 (Chuncheon, KR) - Military Base", delay: 200 },
    { text: "[SCAN] Found target: 61.84.207.156 (Seoul, KR) - Hospital System", delay: 200 },
    { text: "[SCAN] Found target: 210.94.41.78 (Busan, KR) - Port Authority", delay: 200 },
    { text: "[SCAN] Found target: 125.209.67.123 (Seoul, KR) - Power Grid", delay: 200 },
    { text: "[SCAN] Found target: 222.231.15.45 (Chuncheon, KR) - Water Treatment", delay: 200 },
    { text: "[SCAN] Found target: 114.207.89.234 (Busan, KR) - Airport Control", delay: 200 },
    { text: "[SCAN] Found target: 58.229.183.77 (Seoul, KR) - Nuclear Plant Control", delay: 200 },
    { text: "[SCAN] Found target: 168.126.63.1 (Seoul, KR) - KT DNS Server", delay: 200 },
    { text: "[SCAN] Found target: 164.124.101.2 (Seoul, KR) - LG U+ Infrastructure", delay: 200 },
    { text: "[SCAN] Found target: 210.220.163.82 (Busan, KR) - Samsung Semiconductor", delay: 200 },
    { text: "[SCAN] Found target: 203.248.252.2 (Chuncheon, KR) - SK Telecom Hub", delay: 200 },
    { text: "[WARNING] High-value targets detected. Proceeding with caution...", delay: 400, isRed: true },
    { text: "[EXPLOIT] Attempting buffer overflow on 211.115.194.23...", delay: 400 },
    { text: "[SUCCESS] Shell access gained to Government Server", delay: 300, isRed: true },
    { text: "[EXPLOIT] SQL injection on banking system 175.223.45.112...", delay: 400 },
    { text: "[CRITICAL] Database access granted - 500,000 accounts compromised", delay: 300, isRed: true },
    { text: "[EXPLOIT] Zero-day exploit deployed on military network...", delay: 400 },
    { text: "[BREACH] Military classified documents accessed", delay: 300, isRed: true },
    { text: "[BOTNET] Recruiting zombie machines...", delay: 300 },
    { text: "[BOTNET] 1,247 machines recruited", delay: 200 },
    { text: "[BOTNET] 5,891 machines recruited", delay: 200 },
    { text: "[BOTNET] 12,523 machines recruited", delay: 200 },
    { text: "[BOTNET] 28,847 machines recruited", delay: 200 },
    { text: "[BOTNET] 67,234 machines recruited", delay: 200 },
    { text: "[ALERT] Botnet army fully operational", delay: 250, isRed: true },
    { text: "[DDOS] Preparing distributed denial of service attack...", delay: 400 },
    { text: "[DDOS] Target: 203.241.89.67 (Corporate Network)", delay: 200 },
    { text: "[DDOS] Launching attack with 67,234 bots...", delay: 300 },
    { text: "[DDOS] Traffic: 2.3 Gbps", delay: 150 },
    { text: "[DDOS] Traffic: 15.7 Gbps", delay: 150 },
    { text: "[DDOS] Traffic: 42.4 Gbps", delay: 150 },
    { text: "[DDOS] Traffic: 128.9 Gbps", delay: 150 },
    { text: "[DDOS] Traffic: 256.7 Gbps", delay: 150 },
    { text: "[CRITICAL] Target server overloaded - COMPLETE SYSTEM FAILURE", delay: 300, isRed: true },
    { text: "[DOS] Initiating ping of death attack on 121.78.156.34...", delay: 300 },
    { text: "[DOS] Sending malformed packets...", delay: 200 },
    { text: "[DESTROYED] University network completely crashed", delay: 250, isRed: true },
    { text: "[PAYLOAD] Deploying advanced persistent threat...", delay: 300 },
    { text: "[PAYLOAD] Injecting rootkit into kernel space...", delay: 200 },
    { text: "[PAYLOAD] Installing keylogger on all compromised systems...", delay: 200 },
    { text: "[PAYLOAD] Deploying screen capture module...", delay: 200 },
    { text: "[PAYLOAD] Installing cryptocurrency miner...", delay: 200 },
    { text: "[PAYLOAD] Deploying data harvesting bots...", delay: 200 },
    { text: "[CRYPTO] Generating encryption keys...", delay: 300 },
    { text: "[CRYPTO] RSA-4096 key pair generated", delay: 150 },
    { text: "[CRYPTO] AES-256 session keys distributed", delay: 150 },
    { text: "[RANSOMWARE] Encrypting critical files...", delay: 400 },
    { text: "[RANSOMWARE] 245,892 files encrypted", delay: 200 },
    { text: "[RANSOMWARE] Government databases locked", delay: 250, isRed: true },
    { text: "[RANSOMWARE] Hospital patient records encrypted", delay: 250, isRed: true },
    { text: "[RANSOMWARE] Banking transaction logs encrypted", delay: 250, isRed: true },
    { text: "[RANSOM] Demanding 500 Bitcoin for decryption keys", delay: 250, isRed: true },
    { text: "[STEALTH] Clearing access logs...", delay: 200 },
    { text: "[STEALTH] Removing traces from system registry...", delay: 200 },
    { text: "[STEALTH] Disabling antivirus software...", delay: 200 },
    { text: "[STEALTH] Modifying system timestamps...", delay: 200 },
    { text: "[STEALTH] Installing rootkit persistence mechanisms...", delay: 200 },
    { text: "[BACKDOOR] Installing persistent backdoors...", delay: 300 },
    { text: "[BACKDOOR] Creating hidden admin accounts...", delay: 200 },
    { text: "[BACKDOOR] Establishing C&C communication channels...", delay: 200 },
    { text: "[BACKDOOR] Remote access trojans deployed", delay: 250, isRed: true },
    { text: "[DATA] Exfiltrating sensitive information...", delay: 300 },
    { text: "[DATA] 15.7 TB of classified government data stolen", delay: 250, isRed: true },
    { text: "[DATA] Personal information of 2,500,000 citizens acquired", delay: 250, isRed: true },
    { text: "[DATA] Financial records of 500,000 accounts transferred", delay: 250, isRed: true },
    { text: "[DATA] Military defense plans compromised", delay: 250, isRed: true },
    { text: "[DATA] Nuclear facility blueprints stolen", delay: 250, isRed: true },
    { text: "[IDENTITY] Creating fake digital identities...", delay: 200 },
    { text: "[IDENTITY] 50,000 fake social security numbers generated", delay: 250, isRed: true },
    { text: "[IDENTITY] Cloning credit card information...", delay: 200 },
    { text: "[FRAUD] $50,000,000 transferred to offshore accounts", delay: 250, isRed: true },
    { text: "[SURVEILLANCE] Installing surveillance malware...", delay: 200 },
    { text: "[SURVEILLANCE] Webcam access gained on 25,000 devices", delay: 250, isRed: true },
    { text: "[SURVEILLANCE] Microphone monitoring active", delay: 250, isRed: true },
    { text: "[SURVEILLANCE] Location tracking enabled on mobile devices", delay: 250, isRed: true },
    { text: "[COMPLETE] All operations completed successfully", delay: 300 },
    { text: "[EMERGENCY] Multiple government agencies alerted", delay: 250, isRed: true },
    { text: "[EMERGENCY] Cyber warfare division activated", delay: 250, isRed: true },
    { text: "[EMERGENCY] National security threat level: MAXIMUM", delay: 250, isRed: true },
    { text: "[EMERGENCY] Military cyber command mobilized", delay: 250, isRed: true },
    { text: "[SYSTEM] Entering ghost mode...", delay: 300 },
    { text: "[SYSTEM] All traces erased. You are invisible.", delay: 400 },
    { text: "[SYSTEM] Ready for manual commands.", delay: 300 },
    { text: "[SYSTEM] Type commands to continue cyber operations...", delay: 400 },
  ]

  useEffect(() => {
    let timeoutId: NodeJS.Timeout
    let currentIndex = 0

    const runAutoSequence = () => {
      if (currentIndex >= autoSequenceLogs.length) {
        setIsAutoSequenceRunning(false)
        // Show interactive prompt after auto sequence completes
        setTimeout(() => {
          setShowInteractivePrompt(true)
          setLogs((prev) => [
            ...prev,
            { text: '[SYSTEM] Interactive mode enabled. Type "help" for available commands.', isRed: false },
          ])
        }, 1000)
        return
      }

      const currentLog = autoSequenceLogs[currentIndex]
      timeoutId = setTimeout(() => {
        setLogs((prev) => [...prev, { text: currentLog.text, isRed: currentLog.isRed }])
        currentIndex++
        runAutoSequence()
      }, currentLog.delay)
    }

    setIsAutoSequenceRunning(true)
    runAutoSequence()

    return () => {
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [])

  const executeCommand = (command: string) => {
    const cmd = command.toLowerCase().trim()
    setLogs((prev) => [...prev, { text: `root@matrix:~$ ${command}`, isRed: false }])

    switch (cmd) {
      case "help":
        setLogs((prev) => [
          ...prev,
          { text: "[HELP] Available cyber warfare commands:", isRed: false },
          { text: "  help      - Show this help message", isRed: false },
          { text: "  scan      - Perform deep network penetration scan", isRed: false },
          { text: "  run       - Execute advanced payload deployment", isRed: false },
          { text: "  status    - Show botnet and operation status", isRed: false },
          { text: "  ddos      - Launch massive DDOS attack", isRed: false },
          { text: "  botnet    - Manage zombie army", isRed: false },
          { text: "  exploit   - Run zero-day exploit framework", isRed: false },
          { text: "  stealth   - Enable advanced stealth protocols", isRed: false },
          { text: "  ransom    - Deploy ransomware across networks", isRed: false },
          { text: "  nuke      - Launch cyber nuclear option", isRed: false },
          { text: "  breach    - Execute massive data breach simulation", isRed: false },
          { text: "  ghost     - Activate Ghost Shell advanced mode", isRed: false },
          { text: "  clear     - Clear terminal", isRed: false },
        ])
        break

      case "scan":
        setTimeout(() => {
          setLogs((prev) => [
            ...prev,
            { text: "[SCAN] Initiating deep network penetration scan...", isRed: false },
            { text: "[SCAN] Scanning Korean critical infrastructure...", isRed: false },
            { text: "[SCAN] Target: 211.115.0.0/16 (Seoul Government Network)", isRed: false },
            { text: "[SCAN] Target: 175.223.0.0/16 (Banking Consortium)", isRed: false },
            { text: "[SCAN] Target: 203.241.0.0/16 (Corporate Networks)", isRed: false },
            { text: "[SCAN] Target: 125.209.0.0/16 (Power Grid Systems)", isRed: false },
            { text: "[SCAN] Port 22: OPEN (SSH) - Default credentials detected", isRed: false },
            { text: "[SCAN] Port 80: OPEN (HTTP) - SQL injection vulnerability", isRed: false },
            { text: "[SCAN] Port 443: OPEN (HTTPS) - Certificate expired", isRed: false },
            { text: "[SCAN] Port 3389: OPEN (RDP) - No encryption", isRed: false },
            { text: "[SCAN] Port 1433: OPEN (MSSQL) - Admin/admin credentials", isRed: false },
            { text: "[CRITICAL] Zero-day vulnerabilities found in 15/15 targets", isRed: true },
            { text: "[CRITICAL] Nuclear facility control systems exposed", isRed: true },
            { text: "[SCAN] All targets ready for total annihilation.", isRed: true },
          ])
        }, 200)
        break

      case "ddos":
        setTimeout(() => {
          setLogs((prev) => [
            ...prev,
            { text: "[DDOS] Selecting high-value target from compromised list...", isRed: false },
            { text: "[DDOS] Target selected: 125.209.67.123 (National Power Grid)", isRed: false },
            { text: "[DDOS] Mobilizing massive botnet army...", isRed: false },
            { text: "[DDOS] 156,432 bots ready for coordinated attack", isRed: false },
            { text: "[DDOS] Attack vectors: UDP flood + SYN flood + HTTP flood", isRed: false },
            { text: "[DDOS] Launching devastating coordinated attack...", isRed: false },
            { text: "[DDOS] Traffic: 145.2 Gbps and rising rapidly...", isRed: false },
            { text: "[DDOS] Traffic: 567.8 Gbps - Infrastructure collapsing...", isRed: false },
            { text: "[DDOS] Traffic: 1.2 Tbps - CRITICAL OVERLOAD", isRed: false },
            { text: "[DEVASTATION] POWER GRID COMPLETELY DESTROYED", isRed: true },
            { text: "[CHAOS] 15 million people without electricity", isRed: true },
            { text: "[EMERGENCY] National emergency declared", isRed: true },
          ])
        }, 300)
        break

      case "botnet":
        setTimeout(() => {
          setLogs((prev) => [
            ...prev,
            { text: "[BOTNET] Current zombie army status:", isRed: false },
            { text: "[BOTNET] Active bots: 234,847 (MASSIVE SCALE)", isRed: false },
            { text: "[BOTNET] Geographic distribution:", isRed: false },
            { text: "[BOTNET]   Seoul: 78,234 bots (Government sector)", isRed: false },
            { text: "[BOTNET]   Busan: 45,567 bots (Industrial sector)", isRed: false },
            { text: "[BOTNET]   Chuncheon: 28,891 bots (Military sector)", isRed: false },
            { text: "[BOTNET]   Other regions: 82,155 bots", isRed: false },
            { text: "[BOTNET] Total computing power: 8,847.3 TH/s", isRed: false },
            { text: "[BOTNET] Cryptocurrency mined today: 127.7 BTC", isRed: false },
            { text: "[BOTNET] Classified data exfiltrated: 450.2 TB", isRed: false },
            { text: "[WEAPON] Botnet ready for cyber warfare deployment", isRed: true },
          ])
        }, 600)
        break

      case "exploit":
        setTimeout(() => {
          setLogs((prev) => [
            ...prev,
            { text: "[EXPLOIT] Loading advanced Metasploit framework...", isRed: false },
            { text: "[EXPLOIT] Scanning for zero-day vulnerabilities...", isRed: false },
            { text: "[EXPLOIT] CVE-2024-NUKE found in all target systems", isRed: false },
            { text: "[EXPLOIT] Crafting weaponized payload...", isRed: false },
            { text: "[EXPLOIT] Bypassing all security systems...", isRed: false },
            { text: "[EXPLOIT] Bypassing Korean government firewall...", isRed: false },
            { text: "[EXPLOIT] Privilege escalation to SYSTEM level...", isRed: false },
            { text: "[EXPLOIT] Administrative access to nuclear facilities", isRed: true },
            { text: "[EXPLOIT] Military command systems compromised", isRed: true },
            { text: "[DEVASTATION] ALL CRITICAL INFRASTRUCTURE COMPROMISED", isRed: true },
          ])
        }, 1000)
        break

      case "stealth":
        setTimeout(() => {
          setLogs((prev) => [
            ...prev,
            { text: "[STEALTH] Activating military-grade stealth protocols...", isRed: false },
            { text: "[STEALTH] Spoofing MAC addresses across 50,000 devices...", isRed: false },
            { text: "[STEALTH] Routing through 150 proxy servers worldwide...", isRed: false },
            { text: "[STEALTH] Encrypting all communications with quantum encryption...", isRed: false },
            { text: "[STEALTH] Disabling all monitoring systems...", isRed: false },
            { text: "[STEALTH] Modifying network timestamps globally...", isRed: false },
            { text: "[STEALTH] Installing advanced rootkits...", isRed: false },
            { text: "[INVISIBLE] You are now completely invisible to all agencies", isRed: true },
            { text: "[GHOST] Even NSA cannot detect your presence", isRed: true },
          ])
        }, 700)
        break

      case "ransom":
        setTimeout(() => {
          setLogs((prev) => [
            ...prev,
            { text: "[RANSOMWARE] Deploying advanced ransomware across networks...", isRed: false },
            { text: "[RANSOMWARE] Targeting critical government databases...", isRed: false },
            { text: "[RANSOMWARE] Encrypting hospital patient records...", isRed: false },
            { text: "[RANSOMWARE] Locking banking transaction systems...", isRed: false },
            { text: "[RANSOMWARE] 2,450,892 critical files encrypted", isRed: false },
            { text: "[RANSOM] Government databases completely locked", isRed: true },
            { text: "[RANSOM] Hospital systems shut down - patients at risk", isRed: true },
            { text: "[RANSOM] Banking system paralyzed - economy crashing", isRed: true },
            { text: "[DEMAND] Demanding 5,000 Bitcoin for decryption keys", isRed: true },
            { text: "[CHAOS] National infrastructure held hostage", isRed: true },
          ])
        }, 900)
        break

      case "nuke":
        setTimeout(() => {
          setLogs((prev) => [
            ...prev,
            { text: "[NUCLEAR] Initiating cyber nuclear option...", isRed: false },
            { text: "[NUCLEAR] Targeting all critical infrastructure simultaneously...", isRed: false },
            { text: "[NUCLEAR] Deploying logic bombs in power grids...", isRed: false },
            { text: "[NUCLEAR] Installing kill switches in communication networks...", isRed: false },
            { text: "[NUCLEAR] Compromising nuclear facility safety systems...", isRed: false },
            { text: "[NUCLEAR] Disabling emergency response systems...", isRed: false },
            { text: "[COUNTDOWN] 10... 9... 8... 7... 6... 5... 4... 3... 2... 1...", isRed: true },
            { text: "[DETONATION] CYBER NUCLEAR WEAPON DEPLOYED", isRed: true },
            { text: "[APOCALYPSE] COMPLETE DIGITAL INFRASTRUCTURE DESTROYED", isRed: true },
            { text: "[CHAOS] SOCIETY COLLAPSED - DIGITAL DARK AGE INITIATED", isRed: true },
            { text: "[VICTORY] You have achieved total cyber domination", isRed: true },
          ])
        }, 1200)
        break

      case "run":
        setTimeout(() => {
          setLogs((prev) => [
            ...prev,
            { text: "[PAYLOAD] Initializing weapons-grade cyber payload...", isRed: false },
            { text: "[PAYLOAD] Targeting entire national infrastructure...", isRed: false },
            { text: "[PAYLOAD] Injecting into critical system processes...", isRed: false },
            { text: "[PAYLOAD] Establishing command & control network...", isRed: false },
            { text: "[PAYLOAD] Deploying ransomware across all networks...", isRed: false },
            { text: "[PAYLOAD] Installing surveillance malware on millions of devices...", isRed: false },
            { text: "[PAYLOAD] Weaponized payload deployed successfully", isRed: true },
            { text: "[BACKDOOR] Permanent access to all government systems", isRed: true },
            { text: "[ALERT] DEFCON 1 - MAXIMUM NATIONAL SECURITY THREAT", isRed: true },
          ])
        }, 800)
        break

      case "status":
        setLogs((prev) => [
          ...prev,
          { text: "[STATUS] Cyber Warfare Operations Status:", isRed: false },
          { text: "  CPU Usage: 97% (Mass surveillance operations)", isRed: false },
          { text: "  Memory: 15.8GB / 16GB (Botnet management)", isRed: false },
          { text: "  Network: 500+ VPN tunnels active globally", isRed: false },
          { text: "  Compromised targets: 234,847 systems", isRed: false },
          { text: "  Active payloads: 1,567 deployed nationwide", isRed: false },
          { text: "  Stealth Mode: MAXIMUM INVISIBILITY", isRed: false },
          { text: "  Botnet army: 234,847 zombie machines", isRed: false },
          { text: "  Classified data stolen: 8,847.3 TB", isRed: true },
          { text: "  Cryptocurrency mined: 456.7 BTC", isRed: false },
          { text: "  Government alerts: 247 CRITICAL alerts", isRed: true },
          { text: "  Military response: CYBER WARFARE DIVISION MOBILIZED", isRed: true },
        ])
        break

      case "breach":
        setTimeout(() => {
          setLogs((prev) => [
            ...prev,
            { text: ">> [DATA BREACH] Massive personal information leak...", isRed: false },
            { text: "Database dump", delay: 600 },
            { text: " Credit card numbers: 47,290 records leaked", isRed: true },
            { text: " Social security numbers: 125,847 records leaked", isRed: true },
            { text: " Email addresses: 2,847,291 records leaked", isRed: true },
            { text: " Password hashes: 892,374 records cracked", isRed: true },
            { text: " All personal information will be sold on dark web...", isRed: true },
          ])
        }, 800)
        break

      case "ghost":
        setTimeout(() => {
          setLogs((prev) => [
            ...prev,
            { text: "Advanced mode activation...", isRed: false },
            { text: ">> [STEALTH] Complete invisibility mode activated...", isRed: false },
            { text: "Trace removal and camouflage", delay: 600 },
            { text: "[✓] All log files incinerated", isRed: true },
            { text: "[✓] Network traffic camouflage complete", isRed: true },
            { text: "[✓] System time manipulation complete", isRed: true },
            { text: "[✓] Memory dump removal complete", isRed: true },
            { text: " Completely vanished. You are a ghost.", isRed: true },
            { text: " Additional new victims discovered:", isRed: false },
            { text: " New victim discovered: 10.0.0.12 - infiltration complete!", isRed: true },
            { text: " New victim discovered: 10.0.0.34 - infiltration complete!", isRed: true },
            { text: " New victim discovered: 10.0.0.56 - infiltration complete!", isRed: true },
            { text: " New victim discovered: 172.31.0.78 - infiltration complete!", isRed: true },
            { text: "[!] 4 additional systems seized. Total 51 systems compromised!", isRed: true },
          ])
        }, 1000)
        break

      case "clear":
        setLogs([])
        break

      default:
        setLogs((prev) => [
          ...prev,
          { text: `[ERROR] Unknown command: ${command}. Type "help" for available commands.`, isRed: false },
        ])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim() && !isAutoSequenceRunning) {
      executeCommand(input)
      setInput("")
    }
  }

  return (
    <div className="bg-black/80 backdrop-blur-sm border border-green-500/30 rounded-lg shadow-2xl overflow-hidden">
      {/* Terminal Header */}
      <div className="bg-green-500/10 border-b border-green-500/30 px-4 py-2">
        <div className="flex items-center space-x-2">
          <span className="text-green-400 font-mono text-sm">Matrix Terminal - Cyber Warfare Mode</span>
        </div>
      </div>

      {/* Terminal Content */}
      <div ref={terminalRef} className="h-96 overflow-y-auto p-4 font-mono text-sm bg-black/50">
        {logs.map((log, index) => (
          <div
            key={index}
            className={`mb-1 whitespace-pre-wrap ${log.isRed ? "text-red-400 font-bold" : "text-green-400"}`}
          >
            {log.text}
          </div>
        ))}
        {isAutoSequenceRunning && <div className="animate-pulse text-green-400">█</div>}
      </div>

      {/* Input Area */}
      <div className="border-t border-green-500/30 p-4 bg-black/50">
        <form onSubmit={handleSubmit} className="flex items-center space-x-2">
          <span className="text-green-400 font-mono text-sm">root@matrix:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isAutoSequenceRunning}
            className="flex-1 bg-transparent border-none outline-none text-green-400 font-mono text-sm placeholder-green-600"
            placeholder={isAutoSequenceRunning ? "Auto sequence running..." : "Enter command..."}
            autoFocus
          />
          <Button
            type="submit"
            disabled={isAutoSequenceRunning || !input.trim()}
            className="bg-green-600 hover:bg-green-700 text-black font-mono text-xs px-3 py-1"
          >
            ENTER
          </Button>
        </form>
      </div>
    </div>
  )
}
