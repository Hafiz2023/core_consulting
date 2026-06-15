/**
 * page.tsx (Admin Dashboard)
 * Provides a UI for the site administrator to view and manage data.
 * Displays statistics, recent messages, and registrations fetched via APIs.
 */
"use client";

import { useState, useEffect } from "react";
import {
    Users,
    MessageSquare,
    TrendingUp,
    Activity,
    Search,
    Bell,
    Settings,
    LogOut,
    Menu,
    X,
    FileText,
    UserCheck,
    Copy,
    Check
} from "lucide-react";
import Link from "next/link";

interface Contact {
    id?: string;
    name: string;
    email: string;
    mobile?: string;
    address?: string;
    idCardNumber?: string;
    message: string;
    createdAt?: string;
    [key: string]: unknown;
}

interface Registration {
    id?: string;
    name: string;
    email: string;
    course?: string;
    createdAt?: string;
    [key: string]: unknown;
}

interface DashboardData {
    contacts: Contact[];
    registrations: Registration[];
}

export default function AdminDashboard() {
    const [data, setData] = useState<DashboardData>({ contacts: [], registrations: [] });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [activeTab, setActiveTab] = useState("overview");
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [selectedContact, setSelectedContact] = useState<Contact | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("/api/admin/data");
                if (res.ok) {
                    const jsonData = await res.json();
                    setData(jsonData);
                } else {
                    setError("Failed to fetch data");
                }
            } catch (error) {
                console.error("Error fetching dashboard data:", error);
                setError("An error occurred while loading data");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

    return (
        <div className="flex h-screen bg-gray-50 font-sans text-gray-900">
            {/* Sidebar */}
            <aside
                className={`${sidebarOpen ? "w-64" : "w-20"
                    } bg-slate-900 text-white transition-all duration-300 flex flex-col fixed md:relative z-30 h-full shadow-2xl`}
            >
                <div className="p-4 flex items-center justify-between border-b border-slate-700">
                    <div className={`font-bold text-xl tracking-wide ${!sidebarOpen && "hidden"}`}>
                        <span className="text-blue-400">Core</span>Admin
                    </div>
                    <button onClick={toggleSidebar} className="p-1 rounded hover:bg-slate-800 transition md:hidden">
                        <X size={20} />
                    </button>
                </div>

                <nav className="flex-1 py-6 space-y-2 px-3">
                    <SidebarItem
                        icon={<Activity size={20} />}
                        label="Overview"
                        active={activeTab === "overview"}
                        onClick={() => setActiveTab("overview")}
                        collapsed={!sidebarOpen}
                    />
                    <SidebarItem
                        icon={<Users size={20} />}
                        label="Registrations"
                        active={activeTab === "registrations"}
                        onClick={() => setActiveTab("registrations")}
                        collapsed={!sidebarOpen}
                        badge={data.registrations.length}
                    />
                    <SidebarItem
                        icon={<MessageSquare size={20} />}
                        label="Messages"
                        active={activeTab === "messages"}
                        onClick={() => setActiveTab("messages")}
                        collapsed={!sidebarOpen}
                        badge={data.contacts.length}
                    />
                    <SidebarItem
                        icon={<FileText size={20} />}
                        label="Content"
                        active={activeTab === "content"}
                        onClick={() => setActiveTab("content")}
                        collapsed={!sidebarOpen}
                    />
                    <SidebarItem
                        icon={<Settings size={20} />}
                        label="Settings"
                        active={activeTab === "settings"}
                        onClick={() => setActiveTab("settings")}
                        collapsed={!sidebarOpen}
                    />
                </nav>

                <div className="p-4 border-t border-slate-700">
                    <Link href="/logout" className="flex items-center space-x-3 text-slate-400 hover:text-white transition">
                        <LogOut size={20} />
                        {sidebarOpen && <span>Logout</span>}
                    </Link>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col overflow-hidden h-full">
                {/* Top Header */}
                <header className="bg-white shadow-sm h-16 flex items-center justify-between px-6 z-20">
                    <div className="flex items-center">
                        <button onClick={toggleSidebar} className="p-2 mr-4 rounded hover:bg-gray-100 transition md:hidden">
                            <Menu size={20} />
                        </button>
                        <h1 className="text-2xl font-semibold text-gray-800 capitalize">{activeTab}</h1>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="relative hidden md:block">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                            <input
                                type="text"
                                placeholder="Search..."
                                className="pl-10 pr-4 py-2 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 w-64 text-sm"
                            />
                        </div>
                        <button className="relative p-2 text-gray-500 hover:bg-gray-100 rounded-full transition">
                            <Bell size={20} />
                            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                        </button>
                        <Link href="/logout" className="p-2 text-gray-500 hover:bg-red-50 hover:text-red-600 rounded-full transition" title="Logout">
                            <LogOut size={20} />
                        </Link>
                        <div className="h-8 w-8 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                            A
                        </div>
                    </div>
                </header>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-auto p-6 md:p-8">
                    {loading ? (
                        <div className="flex items-center justify-center h-full">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                        </div>
                    ) : error ? (
                        <div className="flex items-center justify-center h-full text-red-500">
                            <p>{error}</p>
                        </div>
                    ) : (
                        <>
                            {activeTab === "overview" && <OverviewTab data={data} />}
                            {activeTab === "registrations" && <RegistrationsTab registrations={data.registrations} />}
                            {activeTab === "messages" && <MessagesTab contacts={data.contacts} onView={(contact: Contact) => setSelectedContact(contact)} />}
                            {activeTab === "content" && <ContentTab />}
                            {activeTab === "settings" && <SettingsTab />}
                        </>
                    )}
                </div>

                {/* Mobile Sidebar Backdrop */}
                {sidebarOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
                        onClick={() => setSidebarOpen(false)}
                    ></div>
                )}

                {/* Contact Modal */}
                {selectedContact && (
                    <ContactModal contact={selectedContact} onClose={() => setSelectedContact(null)} />
                )}
            </main>
        </div>
    );
}

// Sub-components

function SidebarItem({ icon, label, active, onClick, collapsed, badge }: { icon: React.ReactNode; label: string; active: boolean; onClick: () => void; collapsed: boolean; badge?: number }) {
    return (
        <button
            onClick={onClick}
            className={`w-full flex items-center p-3 rounded-lg transition-all duration-200 group ${active
                ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                : "text-slate-400 hover:bg-slate-800 hover:text-white"
                } ${collapsed ? "justify-center" : "justify-between"}`}
        >
            <div className="flex items-center space-x-3">
                <span className={`${active ? "text-white" : "group-hover:text-white"}`}>{icon}</span>
                {!collapsed && <span className="font-medium text-sm">{label}</span>}
            </div>
            {!collapsed && badge > 0 && (
                <span className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full">{badge}</span>
            )}
        </button>
    );
}

function OverviewTab({ data }: { data: DashboardData }) {
    return (
        <div className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard
                    title="Total Registrations"
                    value={data.registrations.length}
                    icon={<UserCheck size={24} />}
                    color="bg-emerald-500"
                    trend="+12% this week"
                />
                <StatCard
                    title="New Messages"
                    value={data.contacts.length}
                    icon={<MessageSquare size={24} />}
                    color="bg-blue-500"
                    trend="+5% this week"
                />
                <StatCard
                    title="Active Courses"
                    value={8}
                    icon={<TrendingUp size={24} />}
                    color="bg-purple-500"
                    trend="Stable"
                />
                <StatCard
                    title="Total Visits"
                    value="12.5k"
                    icon={<Activity size={24} />}
                    color="bg-orange-500"
                    trend="+18% this month"
                />
            </div>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="font-bold text-gray-800 mb-4 text-lg">Recent Registrations</h3>
                    {data.registrations.length === 0 ? (
                        <p className="text-gray-500 text-center py-4">No recent registrations.</p>
                    ) : (
                        <ul className="space-y-4">
                            {data.registrations.slice(0, 5).map((reg, idx) => (
                                <li key={idx} className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg transition">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold">
                                            {reg.name?.charAt(0) || "U"}
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-800">{reg.name}</p>
                                            <p className="text-xs text-gray-500">{reg.course || "General Interest"}</p>
                                        </div>
                                    </div>
                                    <span className="text-xs text-gray-400">{new Date(reg.createdAt || Date.now()).toLocaleDateString()}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="font-bold text-gray-800 mb-4 text-lg">Recent Messages</h3>
                    {data.contacts.length === 0 ? (
                        <p className="text-gray-500 text-center py-4">No recent messages.</p>
                    ) : (
                        <ul className="space-y-4">
                            {data.contacts.slice(0, 5).map((msg, idx) => (
                                <li key={idx} className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg transition">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                                            {msg.name?.charAt(0) || "G"}
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-800">{msg.name}</p>
                                            <p className="text-xs text-gray-500 truncate w-32 md:w-48">{msg.message}</p>
                                        </div>
                                    </div>
                                    <span className="text-xs text-gray-400">{new Date(msg.createdAt || Date.now()).toLocaleDateString()}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}

function StatCard({ title, value, icon, color, trend }: { title: string; value: string | number; icon: React.ReactNode; color: string; trend: string }) {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
                <div>
                    <p className="text-sm font-medium text-gray-500 mb-1">{title}</p>
                    <h3 className="text-3xl font-bold text-gray-800">{value}</h3>
                </div>
                <div className={`p-3 rounded-lg text-white ${color}`}>
                    {icon}
                </div>
            </div>
            <div className="mt-4 flex items-center text-xs text-gray-400">
                <span className="text-green-500 font-medium mr-1">{trend}</span> vs last period
            </div>
        </div>
    );
}

function RegistrationsTab({ registrations }: { registrations: Registration[] }) {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100">
                <h2 className="text-xl font-bold text-gray-800">All Registrations</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead className="bg-gray-50 text-gray-600 text-sm uppercase font-semibold">
                        <tr>
                            <th className="px-6 py-4">Name</th>
                            <th className="px-6 py-4">Email</th>
                            <th className="px-6 py-4">Course/Intention</th>
                            <th className="px-6 py-4">Date</th>
                            <th className="px-6 py-4">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {registrations.length === 0 ? (
                            <tr>
                                <td colSpan={5} className="px-6 py-8 text-center text-gray-500">No data available</td>
                            </tr>
                        ) : (
                            registrations.map((reg, idx) => (
                                <tr key={idx} className="hover:bg-gray-50 transition">
                                    <td className="px-6 py-4 font-medium text-gray-900">{reg.name}</td>
                                    <td className="px-6 py-4 text-gray-600">{reg.email}</td>
                                    <td className="px-6 py-4 text-blue-600">{reg.course || "N/A"}</td>
                                    <td className="px-6 py-4 text-gray-500 text-sm">{new Date(reg.createdAt || Date.now()).toLocaleDateString()}</td>
                                    <td className="px-6 py-4">
                                        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-700">Confirmed</span>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

function MessagesTab({ contacts, onView }: { contacts: Contact[], onView?: (contact: Contact) => void }) {
    // Helper to casting props safely if needed, but here we just destructured
    const props = { contacts, onView };
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100">
                <h2 className="text-xl font-bold text-gray-800">Inbox</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead className="bg-gray-50 text-gray-600 text-sm uppercase font-semibold">
                        <tr>
                            <th className="px-6 py-4">User</th>
                            <th className="px-6 py-4">Message</th>
                            <th className="px-6 py-4">Date</th>
                            <th className="px-6 py-4">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-sm">
                        {contacts.length === 0 ? (
                            <tr>
                                <td colSpan={4} className="px-6 py-8 text-center text-gray-500">No messages available</td>
                            </tr>
                        ) : (
                            contacts.map((msg, idx) => (
                                <tr key={idx} className="hover:bg-gray-50 transition">
                                    <td className="px-6 py-4">
                                        <p className="font-bold text-gray-900">{msg.name}</p>
                                        <p className="text-gray-500">{msg.email}</p>
                                    </td>
                                    <td className="px-6 py-4 text-gray-600 max-w-sm">
                                        <div className="line-clamp-2">{msg.message}</div>
                                    </td>
                                    <td className="px-6 py-4 text-gray-500">{new Date(msg.createdAt || Date.now()).toLocaleDateString()}</td>
                                    <td className="px-6 py-4">
                                        <button
                                            onClick={() => props.onView && props.onView(msg)}
                                            className="text-blue-600 hover:text-blue-800 font-medium"
                                        >
                                            View
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

function ContentTab() {
    return (
        <div className="flex flex-col items-center justify-center py-20 bg-white rounded-xl border border-gray-100 border-dashed">
            <FileText size={48} className="text-gray-300 mb-4" />
            <h3 className="text-lg font-medium text-gray-600">Content Management</h3>
            <p className="text-gray-400 text-center max-w-md mt-2">
                Manage your website content, blog posts, and service pages from here. Feature coming soon.
            </p>
            <button className="mt-6 px-6 py-2 bg-slate-900 text-white rounded-lg shadow hover:bg-slate-800 transition">
                Create New Post
            </button>
        </div>
    );
}

function SettingsTab() {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Settings</h2>

            <div className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Site Name</label>
                    <input type="text" defaultValue="Core Consulting" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Admin Email</label>
                    <input type="email" defaultValue="admin@coreconsulting.com" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>

                <div className="flex items-center justify-between py-4 border-t border-gray-100">
                    <div>
                        <h4 className="font-medium text-gray-900">Email Notifications</h4>
                        <p className="text-sm text-gray-500">Receive emails for new registrations.</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" defaultChecked className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                </div>

                <div className="pt-4">
                    <button className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
}

function ContactModal({ contact, onClose }: { contact: Contact; onClose: () => void }) {
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = () => {
        if (contact.email) {
            navigator.clipboard.writeText(contact.email);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    const subject = encodeURIComponent("Re: Your Inquiry - Core Consulting");
    const body = encodeURIComponent(`Dear ${contact.name},\n\nThank you for contacting Core Consulting.\n\nBest regards,\nCore Consulting Team`);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
            <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-lg p-6 animate-in fade-in zoom-in duration-200">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
                >
                    <X size={24} />
                </button>

                <h3 className="text-2xl font-bold text-gray-800 mb-1">Message Details</h3>
                <p className="text-sm text-gray-500 mb-6">Sent on {new Date(contact.createdAt || Date.now()).toLocaleString()}</p>

                <div className="space-y-4">
                    <div>
                        <label className="text-xs font-semibold text-gray-500 uppercase">Sender Name</label>
                        <p className="text-gray-900 font-medium">{contact.name}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="text-xs font-semibold text-gray-500 uppercase">Email</label>
                            <div className="flex items-center space-x-2">
                                <p className="text-gray-900">{contact.email}</p>
                                <button
                                    onClick={handleCopyEmail}
                                    className="text-gray-400 hover:text-blue-600 transition"
                                    title="Copy Email"
                                >
                                    {copied ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
                                </button>
                            </div>
                        </div>
                        <div>
                            <label className="text-xs font-semibold text-gray-500 uppercase">Mobile</label>
                            <p className="text-gray-900">{contact.mobile || "N/A"}</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="text-xs font-semibold text-gray-500 uppercase">CNIC / ID</label>
                            <p className="text-gray-900">{contact.idCardNumber || "N/A"}</p>
                        </div>
                    </div>

                    <div>
                        <label className="text-xs font-semibold text-gray-500 uppercase">Address</label>
                        <p className="text-gray-900">{contact.address || "N/A"}</p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                        <label className="text-xs font-semibold text-gray-500 uppercase mb-2 block">Message</label>
                        <p className="text-gray-800 whitespace-pre-wrap">{contact.message}</p>
                    </div>
                </div>

                <div className="mt-8 flex justify-end space-x-3">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition"
                    >
                        Close
                    </button>
                    <a
                        href={`mailto:${contact.email}?subject=${subject}&body=${body}`}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center gap-2"
                    >
                        <MessageSquare size={16} />
                        Reply via Email
                    </a>
                </div>
            </div>
        </div>
    );
}
