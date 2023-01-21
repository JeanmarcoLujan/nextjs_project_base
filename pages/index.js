import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { Grid } from "@mui/material";
import SalesOverview from '@/src/components/dashboard/SalesOverview';
import DailyActivity from '@/src/components/dashboard/DailyActivity';
import ProductPerfomance from '@/src/components/dashboard/ProductPerfomance';
import BlogCard from '@/src/components/dashboard/BlogCard';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        <SalesOverview />
      </Grid>
      {/* ------------------------- row 1 ------------------------- */}
      <Grid item xs={12} lg={4}>
        <DailyActivity />
      </Grid>
      <Grid item xs={12} lg={8}>
        <ProductPerfomance />
      </Grid>
      <Grid item xs={12} lg={12}>
        <BlogCard />
      </Grid>
    </Grid>
  )
}
