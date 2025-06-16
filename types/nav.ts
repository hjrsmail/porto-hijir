"use client";

import { useState } from 'react';

export default function Navbar() {
    type Tab = 'pageOne' | 'pageTwo' | 'pageThree';
    const [activeTab, setActiveTab] = useState<Tab>('pageOne');
}