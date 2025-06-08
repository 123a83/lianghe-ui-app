export interface StatCardData {
  id: string;
  label: string;
  value: number;
  unit: string;
  icon: string;
  progress: number;
}

export interface RecordData {
  id: string;
  type: 'gain' | 'consume';
  amount: number;
  unit: string;
  date: string;
  status: 'completed' | 'processing' | 'pending';
  details?: {
    [key: string]: string | number;
  };
}

export interface UserData {
  id: string;
  name: string;
  registrationCount: number;
  stats: StatCardData[];
  records: RecordData[];
}

export interface NotificationData {
  id: string;
  message: string;
  type: 'info' | 'warning' | 'success' | 'error';
  icon?: string;
} 