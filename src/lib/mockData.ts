import type { UserData, NotificationData } from '@/types';

export const mockNotification: NotificationData = {
  id: '1',
  message: '目前量值仅开放50000k，详情请关注量合官方客服',
  type: 'warning',
  icon: 'fas fa-exclamation-triangle'
};

export const mockUserData: UserData = {
  id: '1',
  name: 'x',
  registrationCount: 1024,
  stats: [
    {
      id: 'effective_value',
      label: '个人有效量值',
      value: 32.5,
      unit: 'k',
      icon: 'fas fa-user',
      progress: 65
    },
    {
      id: 'total_value',
      label: '个人总量值',
      value: 47.8,
      unit: 'k',
      icon: 'fas fa-globe',
      progress: 85
    }
  ],
  records: [
    {
      id: '1',
      type: 'gain',
      amount: 2.5,
      unit: 'k',
      date: '2025-03-01T14:30:00Z',
      status: 'completed'
    },
    {
      id: '2',
      type: 'gain',
      amount: 5.0,
      unit: 'k',
      date: '2025-02-28T09:15:00Z',
      status: 'completed'
    },
    {
      id: '3',
      type: 'gain',
      amount: 1.2,
      unit: 'k',
      date: '2025-02-27T16:45:00Z',
      status: 'completed'
    },
    {
      id: '4',
      type: 'gain',
      amount: 0.8,
      unit: 'k',
      date: '2025-02-26T12:00:00Z',
      status: 'completed'
    },
    {
      id: '5',
      type: 'gain',
      amount: 3.6,
      unit: 'k',
      date: '2025-02-25T08:30:00Z',
      status: 'processing'
    }
  ]
}; 