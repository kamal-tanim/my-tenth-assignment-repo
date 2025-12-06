"use client"

import { animate,motion, useMotionValue, useTransform } from "framer-motion"
import { useEffect, useState } from "react"

export default function AnimatedNumber({ value, duration = 3, className, trigger }) {
    const count = useMotionValue(0)
    const rounded = useTransform(count, (v) => Math.round(v))
    const [hasAnimated, setHasAnimated] = useState(false)

    useEffect(() => {
        if (trigger && !hasAnimated) {
            animate(count, value, { duration })
            setHasAnimated(true)
        }
    }, [trigger, value, hasAnimated])

    return <motion.span  className={className}>{rounded}</motion.span>
}
