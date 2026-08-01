import {Card, Grid, Text} from '@sanity/ui'
import {set} from 'sanity'
import {
  Bot,
  Cloud,
  Code2,
  LayoutGrid,
  Smartphone,
  Palette,
  Cpu,
  Briefcase,
  ChartColumn,
  Globe,
  Database,
  Shield,
  Lock,
  Server,
  Terminal,
  Monitor,
  Laptop,
  Wifi,
  Network,
  Rocket,
  Lightbulb,
  BookOpen,
  GraduationCap,
  Brain,
  Search,
  Megaphone,
  BarChart3,
  LineChart,
  DollarSign,
  ShoppingCart,
  HeartPulse,
  Camera,
  Image,
  Video,
  Music,
  Gamepad2,
  Wrench,
  Settings,
  Workflow,
  GitBranch,
  Boxes,
  FileCode2,
  FileJson,
  Bug,
  Package,
  PenTool,
  Sparkles,
} from 'lucide-react'

const icons = [
  {name: 'BarChart3', icon: BarChart3},
  {name: 'BookOpen', icon: BookOpen},
  {name: 'Bot', icon: Bot},
  {name: 'Boxes', icon: Boxes},
  {name: 'Brain', icon: Brain},
  {name: 'Briefcase', icon: Briefcase},
  {name: 'Bug', icon: Bug},
  {name: 'Camera', icon: Camera},
  {name: 'ChartColumn', icon: ChartColumn},
  {name: 'Cloud', icon: Cloud},
  {name: 'Code2', icon: Code2},
  {name: 'Cpu', icon: Cpu},
  {name: 'Database', icon: Database},
  {name: 'DollarSign', icon: DollarSign},
  {name: 'FileCode2', icon: FileCode2},
  {name: 'FileJson', icon: FileJson},
  {name: 'Gamepad2', icon: Gamepad2},
  {name: 'GitBranch', icon: GitBranch},
  {name: 'Globe', icon: Globe},
  {name: 'GraduationCap', icon: GraduationCap},
  {name: 'HeartPulse', icon: HeartPulse},
  {name: 'Image', icon: Image},
  {name: 'Laptop', icon: Laptop},
  {name: 'Lightbulb', icon: Lightbulb},
  {name: 'LineChart', icon: LineChart},
  {name: 'Lock', icon: Lock},
  {name: 'Megaphone', icon: Megaphone},
  {name: 'Monitor', icon: Monitor},
  {name: 'Music', icon: Music},
  {name: 'Network', icon: Network},
  {name: 'Package', icon: Package},
  {name: 'Palette', icon: Palette},
  {name: 'PenTool', icon: PenTool},
  {name: 'Rocket', icon: Rocket},
  {name: 'Search', icon: Search},
  {name: 'Server', icon: Server},
  {name: 'Settings', icon: Settings},
  {name: 'Shield', icon: Shield},
  {name: 'ShoppingCart', icon: ShoppingCart},
  {name: 'Smartphone', icon: Smartphone},
  {name: 'Sparkles', icon: Sparkles},
  {name: 'Terminal', icon: Terminal},
  {name: 'Video', icon: Video},
  {name: 'Wifi', icon: Wifi},
  {name: 'Workflow', icon: Workflow},
  {name: 'Wrench', icon: Wrench},
  {name: 'LayoutGrid', icon: LayoutGrid}
]

export default function IconPicker(props: any) {
  const {value, onChange} = props

  return (
    <Grid columns={3} gap={3}>
      {icons.map(({name, icon: Icon}) => (
        <Card
          key={name}
          padding={3}
          radius={2}
          shadow={1}
          tone={value === name ? 'primary' : 'default'}
          style={{cursor: 'pointer', textAlign: 'center'}}
          onClick={() => onChange(set(name))}
        >
          <Icon size={28} />
          <Text size={1}>{name}</Text>
        </Card>
      ))}
    </Grid>
  )
}
