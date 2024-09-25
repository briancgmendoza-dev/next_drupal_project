'use client'

import React, { useEffect, useRef } from 'react'
import { Box, Button } from '@mui/material'
import { Text } from '@/app/_components/ui/Text'
import { DashboardService } from '@/app/services/private/dashboard'

const USER_ID : number = 2

export default function Dashboard() {
  return (
    <Box component="section">
      <Text component="h1">Dashboard</Text>

      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
        <Button
          sx={{
            p: '.5rem 2rem',
            border: "1px solid tomato"
          }}
          onClick={async () => {
            const link = await DashboardService.getLiveEventLink(USER_ID)
            if (link?.error) {
              alert("Di ka invited sa Grand Draw")
            } else {
              window.open(`https:${link}`, '_blank')?.focus()
            }
          }}
        >
          Join Live Event
        </Button>
        {/* <Button
          sx={{
            p: '.5rem 2rem',
            border: "1px solid tomato"
          }}
          onClick={() => {}}
        >
          Fire Custom Tag
        </Button> */}
      </Box>
    </Box>
  )
}
