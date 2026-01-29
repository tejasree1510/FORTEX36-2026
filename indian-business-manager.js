// ============================================
// INDIAN BUSINESS MANAGER - DUKAANSAATHI
// ============================================

let businessData = {
    type: '',
    name: '',
    owner: '',
    city: '',
    area: '',
    mobile: '',
    startDate: '',
    icon: '',
    stats: {
        revenue: 0,
        profit: 0,
        customers: 0,
        inventory: 0
    }
};

// Business Type Configurations
const businessConfigs = {
    kirana: {
        name: 'Kirana Store',
        icon: '🛒',
        inventoryItems: [
            { name: 'Basmati Rice', stock: 45, unit: 'kg', price: 80, status: 'medium' },
            { name: 'Wheat Flour', stock: 12, unit: 'kg', price: 40, status: 'low' },
            { name: 'Sugar', stock: 60, unit: 'kg', price: 45, status: 'good' },
            { name: 'Tea Powder', stock: 8, unit: 'kg', price: 450, status: 'low' },
            { name: 'Cooking Oil', stock: 35, unit: 'L', price: 180, status: 'good' }
        ],
        suggestions: [
            {
                title: 'Stock Popular Snacks',
                desc: 'Add chips, biscuits, and namkeen near billing counter. Can increase impulse sales by 20-30%',
                impact: '₹3,000-5,000/month'
            },
            {
                title: 'Start Home Delivery',
                desc: 'Use WhatsApp for orders. 60% of local kiranas now offer delivery. Invest ₹2,000 in delivery system',
                impact: '₹8,000-12,000/month'
            },
            {
                title: 'Bundle Offers',
                desc: 'Create combos: Dal+Rice+Oil. Increases average bill size by 15%',
                impact: '₹5,000-7,000/month'
            }
        ],
        costLeaks: [
            {
                title: 'Expired Stock Wastage',
                amount: '₹2,400/month',
                desc: 'Items worth ₹2,400 expired last month. Poor inventory rotation.',
                solution: '💡 Implement FIFO (First In First Out). Use mobile app for expiry tracking.'
            },
            {
                title: 'Electricity Bill',
                amount: '₹1,800/month',
                desc: 'AC running 14 hours/day even during low customer hours',
                solution: '💡 Install timer for AC. Run only 10AM-8PM. Save ₹600/month.'
            },
            {
                title: 'Credit Not Collected',
                amount: '₹8,500',
                desc: '12 customers have pending credit totaling ₹8,500 for 45+ days',
                solution: '💡 Send WhatsApp reminders. Offer 2% discount for immediate payment.'
            }
        ],
        areaInsights: [
            {
                icon: '👨‍👩‍👧‍👦',
                title: 'Family Dominated Area',
                desc: 'Your area has 65% families with kids. Stock more school supplies, kids snacks, and daily essentials.'
            },
            {
                icon: '🏢',
                title: 'Office Workers Nearby',
                desc: '3 IT offices within 500m. Stock ready-to-eat items, beverages, and evening snacks.'
            },
            {
                icon: '🛵',
                title: 'High Swiggy/Zomato Usage',
                desc: 'Area has high food delivery usage. Partner with them to sell grocery essentials.'
            },
            {
                icon: '💰',
                title: 'Mid to High Income',
                desc: 'Average household income ₹60,000-80,000. Stock premium brands alongside regular items.'
            }
        ]
    },
    gym: {
        name: 'Gym/Fitness Center',
        icon: '💪',
        inventoryItems: [
            { name: 'Protein Powder', stock: 8, unit: 'pcs', price: 2500, status: 'low' },
            { name: 'Energy Drinks', stock: 45, unit: 'pcs', price: 120, status: 'good' },
            { name: 'Gym Towels', stock: 25, unit: 'pcs', price: 150, status: 'medium' },
            { name: 'Resistance Bands', stock: 12, unit: 'sets', price: 400, status: 'medium' },
            { name: 'Yoga Mats', stock: 6, unit: 'pcs', price: 800, status: 'low' }
        ],
        suggestions: [
            {
                title: 'Add Morning 5-7 AM Slot',
                desc: 'Corporate employees prefer early morning. Can add 20-25 members paying ₹2,000/month',
                impact: '₹40,000-50,000/month'
            },
            {
                title: 'Start Personal Training',
                desc: 'Hire 1 certified trainer. Charge ₹500/session. Even 5 clients daily = good revenue',
                impact: '₹75,000/month'
            },
            {
                title: 'Women-Only Hours',
                desc: 'Offer 11 AM-2 PM women-only slots. Untapped market in your area',
                impact: '₹30,000-40,000/month'
            }
        ],
        costLeaks: [
            {
                title: 'Equipment Maintenance',
                amount: '₹4,500/month',
                desc: 'Reactive repairs costing more than preventive maintenance',
                solution: '💡 Schedule monthly equipment checkup. Will reduce breakdown costs by 60%.'
            },
            {
                title: 'AC Running Continuously',
                amount: '₹3,200/month',
                desc: 'AC running even when gym is empty during 2-5 PM',
                solution: '💡 Install motion sensors or timer. Save ₹1,500/month on electricity.'
            },
            {
                title: 'Member Dropouts',
                amount: '₹18,000/month',
                desc: '6 members cancelled subscriptions last month citing lack of personal attention',
                solution: '💡 Weekly progress tracking for each member. Reduce dropout by 50%.'
            }
        ],
        areaInsights: [
            {
                icon: '🏢',
                title: 'Tech Hub Nearby',
                desc: 'IT park 1km away with 500+ employees. Target them with corporate packages.'
            },
            {
                icon: '👨‍💼',
                title: 'Young Professionals',
                desc: '70% population aged 22-35. High fitness awareness. Premium packages will work.'
            },
            {
                icon: '🏘️',
                title: 'No Competition',
                desc: 'Nearest gym is 2.5km away. You have monopoly in 2km radius.'
            },
            {
                icon: '🌅',
                title: 'Morning Crowd Potential',
                desc: 'Area wakes up early (5-6 AM). Early morning slots will be highly popular.'
            }
        ]
    },
    dairy: {
        name: 'Dairy Shop',
        icon: '🥛',
        inventoryItems: [
            { name: 'Full Cream Milk', stock: 85, unit: 'L', price: 65, status: 'good' },
            { name: 'Toned Milk', stock: 120, unit: 'L', price: 52, status: 'good' },
            { name: 'Curd (दही)', stock: 35, unit: 'kg', price: 60, status: 'medium' },
            { name: 'Paneer', stock: 8, unit: 'kg', price: 350, status: 'low' },
            { name: 'Butter', stock: 18, unit: 'kg', price: 450, status: 'medium' }
        ],
        suggestions: [
            {
                title: 'Home Delivery Service',
                desc: 'Morning milk delivery to homes. Subscription model ensures daily revenue',
                impact: '₹25,000-35,000/month'
            },
            {
                title: 'Add Value Products',
                desc: 'Make and sell paneer, buttermilk, lassi. 40% profit margin vs 15% on milk',
                impact: '₹15,000-20,000/month'
            },
            {
                title: 'Bulk Corporate Supply',
                desc: 'Supply to nearby restaurants, tea shops, hostels. Guaranteed volume',
                impact: '₹40,000-60,000/month'
            }
        ],
        costLeaks: [
            {
                title: 'Milk Spoilage',
                amount: '₹3,800/month',
                desc: 'Average 60L milk spoils monthly during summer due to poor refrigeration timing',
                solution: '💡 Improve refrigeration schedule. Pre-order system to match supply with demand.'
            },
            {
                title: 'Transportation Cost',
                amount: '₹2,200/month',
                desc: 'Multiple trips to dairy farm. Poor route planning',
                solution: '💡 Optimize pickup schedule. Single trip with better planning saves ₹800/month.'
            },
            {
                title: 'Packaging Waste',
                amount: '₹1,500/month',
                desc: 'Excess plastic bags and containers purchased',
                solution: '💡 Encourage customers to bring own containers. 5% discount incentive.'
            }
        ],
        areaInsights: [
            {
                icon: '🏘️',
                title: 'Residential Dense Area',
                desc: 'High density residential area. Home delivery will be highly profitable.'
            },
            {
                icon: '🍽️',
                title: 'Restaurants Nearby',
                desc: '8 restaurants and 12 tea stalls within 1km. B2B opportunity worth ₹50,000/month.'
            },
            {
                icon: '🌡️',
                title: 'Hot Climate Area',
                desc: 'Area gets very hot. Buttermilk and lassi will sell well in summer.'
            },
            {
                icon: '💰',
                title: 'Mid Income Families',
                desc: 'Preference for quality over price. Stock premium Amul/Mother Dairy products.'
            }
        ]
    },
    restaurant: {
        name: 'Restaurant/Dhaba',
        icon: '🍽️',
        inventoryItems: [
            { name: 'Rice', stock: 45, unit: 'kg', price: 65, status: 'medium' },
            { name: 'Wheat Flour', stock: 25, unit: 'kg', price: 40, status: 'low' },
            { name: 'Cooking Oil', stock: 35, unit: 'L', price: 180, status: 'good' },
            { name: 'Vegetables', stock: 55, unit: 'kg', price: 45, status: 'good' },
            { name: 'Spices Mix', stock: 12, unit: 'kg', price: 320, status: 'low' }
        ],
        suggestions: [
            {
                title: 'Launch on Zomato/Swiggy',
                desc: 'Online food delivery can add 40-50 orders daily. Initial investment ₹5,000 for setup',
                impact: '₹60,000-80,000/month'
            },
            {
                title: 'Combo Meals',
                desc: 'Thali at ₹120 instead of individual items. Increases order value by 25%',
                impact: '₹20,000-30,000/month'
            },
            {
                title: 'Lunch Box Service',
                desc: 'Office lunch delivery. Pre-orders ensure no wastage. Monthly subscriptions',
                impact: '₹45,000-55,000/month'
            }
        ],
        costLeaks: [
            {
                title: 'Food Wastage',
                amount: '₹6,500/month',
                desc: 'Prepared food waste due to poor demand forecasting',
                solution: '💡 Track daily sales patterns. Prepare 20% less of slow-moving items.'
            },
            {
                title: 'LPG/Fuel Cost',
                amount: '₹8,200/month',
                desc: 'Gas burners running inefficiently. Old equipment',
                solution: '💡 Upgrade to efficient burners. Investment ₹15,000, saves ₹2,500/month.'
            },
            {
                title: 'Staff Overtime',
                amount: '₹4,800/month',
                desc: 'Poor shift planning causing unnecessary overtime payments',
                solution: '💡 Optimize staff schedule. Hire part-time for peak hours only.'
            }
        ],
        areaInsights: [
            {
                icon: '🏢',
                title: 'Office Area',
                desc: 'Multiple offices nearby. Lunch rush 12:30-2:30 PM. Focus on quick service.'
            },
            {
                icon: '🛣️',
                title: 'Highway Location',
                desc: 'On main road with high traffic. Visibility is good. Evening snacks opportunity.'
            },
            {
                icon: '🏘️',
                title: 'Residential + Commercial',
                desc: 'Mixed area. Breakfast and dinner from residents, lunch from offices.'
            },
            {
                icon: '🚗',
                title: 'Parking Available',
                desc: 'Good parking space. Attract families for dinner. Weekend offers recommended.'
            }
        ]
    },
    medical: {
        name: 'Medical Store',
        icon: '💊',
        inventoryItems: [
            { name: 'Paracetamol', stock: 120, unit: 'strips', price: 5, status: 'good' },
            { name: 'Cough Syrup', stock: 15, unit: 'bottles', price: 85, status: 'low' },
            { name: 'Antibiotics', stock: 45, unit: 'strips', price: 120, status: 'medium' },
            { name: 'Vitamin Tablets', stock: 35, unit: 'bottles', price: 350, status: 'medium' },
            { name: 'Band-Aid/Dressing', stock: 65, unit: 'packs', price: 25, status: 'good' }
        ],
        suggestions: [
            {
                title: 'Home Delivery for Seniors',
                desc: 'Elderly patients need regular medicines. Monthly subscription model',
                impact: '₹15,000-20,000/month'
            },
            {
                title: 'Stock OTC Products',
                desc: 'Add health supplements, protein powders, diabetic foods. High margin items',
                impact: '₹25,000-35,000/month'
            },
            {
                title: 'Partner with Clinics',
                desc: 'Tie-up with nearby doctors. They recommend your store to patients',
                impact: '₹30,000-45,000/month'
            }
        ],
        costLeaks: [
            {
                title: 'Expired Medicine Wastage',
                amount: '₹5,200/month',
                desc: 'Medicines expired before selling. Poor inventory management',
                solution: '💡 Digital expiry tracking. First-to-expire sold first. Reduce wastage by 70%.'
            },
            {
                title: 'Unsold Seasonal Items',
                amount: '₹3,800/month',
                desc: 'Over-stocking seasonal medicines like cough syrups',
                solution: '💡 Stock based on previous year data. 30% less inventory during off-season.'
            },
            {
                title: 'Credit to Customers',
                amount: '₹12,500',
                desc: 'Unpaid bills from 18 customers pending for 60+ days',
                solution: '💡 Strict credit policy. Only for regular customers with ₹2,000 limit.'
            }
        ],
        areaInsights: [
            {
                icon: '🏥',
                title: 'Hospital Nearby',
                desc: 'Clinic 200m away. Partner with doctors for prescription referrals.'
            },
            {
                icon: '👴',
                title: 'Elderly Population',
                desc: 'Area has many senior citizens. Stock chronic disease medications well.'
            },
            {
                icon: '🌙',
                title: 'Night Service Demand',
                desc: 'No 24-hour pharmacy nearby. Consider extended hours till 11 PM.'
            },
            {
                icon: '💰',
                title: 'Insurance Awareness',
                desc: 'High health insurance penetration. Stock medicines covered under schemes.'
            }
        ]
    },
    salon: {
        name: 'Salon/Parlour',
        icon: '💇',
        inventoryItems: [
            { name: 'Hair Color', stock: 8, unit: 'tubes', price: 450, status: 'low' },
            { name: 'Shampoo', stock: 15, unit: 'bottles', price: 650, status: 'medium' },
            { name: 'Hair Gel/Wax', stock: 22, unit: 'bottles', price: 280, status: 'good' },
            { name: 'Face Cream', stock: 12, unit: 'jars', price: 850, status: 'low' },
            { name: 'Towels', stock: 25, unit: 'pcs', price: 120, status: 'medium' }
        ],
        suggestions: [
            {
                title: 'Bridal Package',
                desc: 'Full bridal makeup package at ₹15,000. One booking per week = significant revenue',
                impact: '₹60,000/month'
            },
            {
                title: 'Membership Scheme',
                desc: '₹3,000 for 10 sessions. Upfront payment + guaranteed repeat customers',
                impact: '₹40,000-50,000/month'
            },
            {
                title: 'Sell Hair Products',
                desc: 'Retail shampoos, conditioners, serums. 50% profit margin',
                impact: '₹12,000-18,000/month'
            }
        ],
        costLeaks: [
            {
                title: 'Product Wastage',
                amount: '₹2,800/month',
                desc: 'Hair color, creams wasted due to improper measurement and storage',
                solution: '💡 Train staff on precise measurements. Use digital scales. Save 60%.'
            },
            {
                title: 'No-Show Appointments',
                amount: '₹4,500/month',
                desc: 'Customers booking but not showing up. Slot goes waste',
                solution: '💡 Implement ₹100 advance booking. Send confirmation reminders.'
            },
            {
                title: 'Electricity Wastage',
                amount: '₹1,900/month',
                desc: 'All lights/AC on even during customer gaps',
                solution: '💡 Switch off equipment during gaps. LED lights. Save ₹800/month.'
            }
        ],
        areaInsights: [
            {
                icon: '👰',
                title: 'Wedding Season Area',
                desc: 'High wedding frequency Oct-Feb. Focus on bridal services during peak season.'
            },
            {
                icon: '👩',
                title: 'Working Women',
                desc: '45% working women in area. Weekend and evening slots will be most profitable.'
            },
            {
                icon: '🏪',
                title: 'No Branded Competition',
                desc: 'No Lakme/VLCC in 3km radius. You can charge premium for quality service.'
            },
            {
                icon: '📱',
                title: 'Instagram Active Area',
                desc: 'Young population active on social media. Before/after photos will bring customers.'
            }
        ]
    }
};

// ============================================
// BUSINESS TYPE SELECTION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Handle business type selection
    document.querySelectorAll('.business-type-card').forEach(card => {
        card.addEventListener('click', function() {
            document.querySelectorAll('.business-type-card').forEach(c => c.classList.remove('selected'));
            this.classList.add('selected');
            businessData.type = this.getAttribute('data-type');
        });
    });
});

function startBusiness() {
    if (!businessData.type) {
        alert('Please select a business type');
        return;
    }

    businessData.name = document.getElementById('businessName').value || 'My Business';
    businessData.owner = document.getElementById('ownerName').value || 'Owner';
    businessData.city = document.getElementById('city').value || 'Mumbai';
    businessData.area = document.getElementById('area').value || 'Local Area';
    businessData.mobile = document.getElementById('mobile').value || '+91 98765 43210';
    businessData.startDate = document.getElementById('startDate').value || '2024-01-01';

    const config = businessConfigs[businessData.type];
    businessData.icon = config.icon;

    // Update sidebar
    document.getElementById('sidebarBusinessName').textContent = businessData.name;
    document.getElementById('sidebarBusinessType').textContent = config.name;
    document.getElementById('sidebarBusinessLocation').textContent = `📍 ${businessData.area}, ${businessData.city}`;
    document.querySelector('.business-icon').textContent = config.icon;

    // Generate initial stats based on business type
    generateStats(businessData.type);

    // Close modal and show dashboard
    document.getElementById('businessTypeModal').classList.add('hidden');
    
    // Load dashboard content
    loadDashboard();
}

function generateStats(type) {
    const baseStats = {
        kirana: { revenue: 125000, profit: 18750, customers: 450, inventory: 285 },
        gym: { revenue: 185000, profit: 74000, customers: 85, inventory: 45 },
        dairy: { revenue: 95000, profit: 14250, customers: 320, inventory: 180 },
        restaurant: { revenue: 220000, profit: 44000, customers: 680, inventory: 120 },
        medical: { revenue: 165000, profit: 33000, customers: 520, inventory: 385 },
        salon: { revenue: 145000, profit: 58000, customers: 180, inventory: 65 }
    };

    businessData.stats = baseStats[type] || baseStats.kirana;
}

// ============================================
// DASHBOARD CONTENT LOADING
// ============================================

function loadDashboard() {
    const config = businessConfigs[businessData.type];
    const dashboard = document.getElementById('mainDashboard');
    
    dashboard.innerHTML = `
        <div class="page-header">
            <h1 class="page-title">Welcome back, ${businessData.owner}! 👋</h1>
            <p class="page-subtitle">Your ${config.name} Dashboard</p>
        </div>

        <!-- Stats Grid -->
        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-header">
                    <div class="stat-icon orange">💰</div>
                    <div class="stat-change up">↑ 12.5%</div>
                </div>
                <div class="stat-value">₹${businessData.stats.revenue.toLocaleString()}</div>
                <div class="stat-label">Monthly Revenue</div>
            </div>
            
            <div class="stat-card">
                <div class="stat-header">
                    <div class="stat-icon green">📊</div>
                    <div class="stat-change up">↑ 8.3%</div>
                </div>
                <div class="stat-value">₹${businessData.stats.profit.toLocaleString()}</div>
                <div class="stat-label">Net Profit</div>
            </div>
            
            <div class="stat-card">
                <div class="stat-header">
                    <div class="stat-icon blue">👥</div>
                    <div class="stat-change up">↑ 5.8%</div>
                </div>
                <div class="stat-value">${businessData.stats.customers}</div>
                <div class="stat-label">Total Customers</div>
            </div>
            
            <div class="stat-card">
                <div class="stat-header">
                    <div class="stat-icon yellow">📦</div>
                    <div class="stat-change down">↓ 3.2%</div>
                </div>
                <div class="stat-value">${businessData.stats.inventory}</div>
                <div class="stat-label">Items in Stock</div>
            </div>
        </div>

        <!-- AI Suggestions -->
        <div class="suggestions-card">
            <div class="suggestions-header">
                <h2>✨ AI-Powered Business Suggestions</h2>
                <div class="ai-badge">🤖 Smart Recommendations</div>
            </div>
            <div class="suggestions-grid">
                ${config.suggestions.map(suggestion => `
                    <div class="suggestion-item">
                        <div class="suggestion-title">${suggestion.title}</div>
                        <div class="suggestion-desc">${suggestion.desc}</div>
                        <div class="suggestion-impact">💵 Potential Impact: ${suggestion.impact}</div>
                    </div>
                `).join('')}
            </div>
        </div>

        <!-- Quick Actions -->
        <div class="quick-actions">
            <div class="action-card">
                <div class="action-icon orange">➕</div>
                <div class="action-content">
                    <h3>Add Sale</h3>
                    <p>Record new sale</p>
                </div>
            </div>
            <div class="action-card">
                <div class="action-icon green">📦</div>
                <div class="action-content">
                    <h3>Update Inventory</h3>
                    <p>Manage stock levels</p>
                </div>
            </div>
            <div class="action-card">
                <div class="action-icon blue">👤</div>
                <div class="action-content">
                    <h3>Add Customer</h3>
                    <p>Register new customer</p>
                </div>
            </div>
            <div class="action-card">
                <div class="action-icon yellow">💸</div>
                <div class="action-content">
                    <h3>Record Expense</h3>
                    <p>Track business costs</p>
                </div>
            </div>
        </div>

        <!-- Content Grid -->
        <div class="content-grid">
            <div class="card">
                <div class="card-header">
                    <h2 class="card-title">Low Stock Alert</h2>
                    <span style="color: var(--danger); font-weight: 600;">⚠️ 5 Items Need Restock</span>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Item Name</th>
                            <th>Current Stock</th>
                            <th>Unit</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${config.inventoryItems.map(item => `
                            <tr>
                                <td style="font-weight: 600;">${item.name}</td>
                                <td>${item.stock}</td>
                                <td>${item.unit}</td>
                                <td>₹${item.price}</td>
                                <td><span class="stock-badge ${item.status}">
                                    ${item.status === 'low' ? '⚠️ Low' : item.status === 'medium' ? '📊 Medium' : '✅ Good'}
                                </span></td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>

            <div class="card">
                <div class="card-header">
                    <h2 class="card-title">Daily Sales</h2>
                </div>
                <div style="padding: 1rem 0;">
                    ${generateDailySales()}
                </div>
            </div>
        </div>
    `;
}

function generateDailySales() {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const sales = [8500, 9200, 7800, 10500, 9800, 12500, 11200];
    
    return days.map((day, i) => `
        <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.75rem 0; border-bottom: 1px solid var(--border);">
            <span style="font-weight: 600;">${day}</span>
            <div style="flex: 1; margin: 0 1rem;">
                <div style="background: var(--bg-light); height: 8px; border-radius: 4px; overflow: hidden;">
                    <div style="width: ${(sales[i] / 12500) * 100}%; height: 100%; background: linear-gradient(90deg, var(--primary), var(--secondary));"></div>
                </div>
            </div>
            <span style="font-weight: 700; color: var(--secondary);">₹${sales[i].toLocaleString()}</span>
        </div>
    `).join('');
}

// ============================================
// NAVIGATION HANDLING
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', function() {
            document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
            this.classList.add('active');
            
            const page = this.getAttribute('data-page');
            loadPage(page);
        });
    });
});

function loadPage(page) {
    const config = businessConfigs[businessData.type];
    const dashboard = document.getElementById('mainDashboard');
    
    switch(page) {
        case 'dashboard':
            loadDashboard();
            break;
        case 'suggestions':
            loadSuggestionsPage(config);
            break;
        case 'leaks':
            loadCostLeaksPage(config);
            break;
        case 'area-insights':
            loadAreaInsightsPage(config);
            break;
        case 'inventory':
            loadInventoryPage(config);
            break;
        case 'customers':
            loadCustomersPage(config);
            break;
        case 'suppliers':
            loadSuppliersPage(config);
            break;
        case 'expenses':
            loadExpensesPage(config);
            break;
        case 'settings':
           loadSettingsPage(config);
            break;
        case 'sales':
            loadSalesPage(config);
            break;
        default:
            loadDashboard();
    }
}

function loadSuggestionsPage(config) {
    const dashboard = document.getElementById('mainDashboard');
    
    dashboard.innerHTML = `
        <div class="page-header">
            <h1 class="page-title">✨ AI-Powered Business Suggestions</h1>
            <p class="page-subtitle">Smart recommendations to grow your ${config.name}</p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 2rem;">
            ${config.suggestions.map((suggestion, index) => `
                <div class="card" style="border-left: 4px solid var(--secondary);">
                    <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
                        <div style="width: 60px; height: 60px; background: linear-gradient(135deg, var(--primary), var(--secondary)); border-radius: 16px; display: flex; align-items: center; justify-content: center; font-size: 2rem; flex-shrink: 0;">
                            ${index === 0 ? '🎯' : index === 1 ? '💡' : '🚀'}
                        </div>
                        <div>
                            <h3 style="font-size: 1.3rem; margin-bottom: 0.25rem;">${suggestion.title}</h3>
                            <div style="background: rgba(19, 136, 8, 0.1); color: var(--secondary); padding: 0.3rem 0.8rem; border-radius: 20px; font-size: 0.85rem; font-weight: 600; display: inline-block;">
                                ${suggestion.impact}
                            </div>
                        </div>
                    </div>
                    
                    <div style="background: var(--bg-light); padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
                        <p style="font-size: 1rem; line-height: 1.7; color: var(--text-dark);">${suggestion.desc}</p>
                    </div>

                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                        <div style="text-align: center; padding: 1rem; background: var(--bg-light); border-radius: 12px;">
                            <div style="font-size: 0.85rem; color: var(--text-gray); margin-bottom: 0.5rem;">Implementation</div>
                            <div style="font-size: 1.1rem; font-weight: 700; color: var(--primary);">1-2 weeks</div>
                        </div>
                        <div style="text-align: center; padding: 1rem; background: var(--bg-light); border-radius: 12px;">
                            <div style="font-size: 0.85rem; color: var(--text-gray); margin-bottom: 0.5rem;">Difficulty</div>
                            <div style="font-size: 1.1rem; font-weight: 700; color: var(--secondary);">Easy</div>
                        </div>
                    </div>

                    <button class="btn btn-primary" style="margin-top: 1.5rem;">
                        Start Implementing
                    </button>
                </div>
            `).join('')}
        </div>

        <div class="card" style="margin-top: 2rem; background: linear-gradient(135deg, rgba(255, 107, 0, 0.05), rgba(19, 136, 8, 0.05));">
            <h3 style="margin-bottom: 1rem; font-size: 1.3rem;">📚 Additional Tips for ${config.name}</h3>
            <ul style="list-style: none; padding: 0;">
                <li style="padding: 0.75rem 0; border-bottom: 1px solid var(--border); display: flex; align-items: center; gap: 1rem;">
                    <span style="width: 32px; height: 32px; background: var(--primary); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700;">1</span>
                    <span>Track daily expenses in detail to identify where money is leaking</span>
                </li>
                <li style="padding: 0.75rem 0; border-bottom: 1px solid var(--border); display: flex; align-items: center; gap: 1rem;">
                    <span style="width: 32px; height: 32px; background: var(--primary); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700;">2</span>
                    <span>Use WhatsApp Business for customer communication and orders</span>
                </li>
                <li style="padding: 0.75rem 0; border-bottom: 1px solid var(--border); display: flex; align-items: center; gap: 1rem;">
                    <span style="width: 32px; height: 32px; background: var(--primary); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700;">3</span>
                    <span>Collect customer feedback regularly to improve service quality</span>
                </li>
                <li style="padding: 0.75rem 0; display: flex; align-items: center; gap: 1rem;">
                    <span style="width: 32px; height: 32px; background: var(--primary); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700;">4</span>
                    <span>Invest in digital payments (Paytm, PhonePe, GPay) to attract more customers</span>
                </li>
            </ul>
        </div>
    `;
}

function loadCostLeaksPage(config) {
    const dashboard = document.getElementById('mainDashboard');
    const totalLeak = config.costLeaks.reduce((sum, leak) => {
        const amount = parseInt(leak.amount.replace(/[₹,]/g, ''));
        return sum + amount;
    }, 0);
    
    dashboard.innerHTML = `
        <div class="page-header">
            <h1 class="page-title">⚠️ Cost Leak Analysis</h1>
            <p class="page-subtitle">Identify where your money is leaking</p>
        </div>

        <div class="card" style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(245, 158, 11, 0.1)); border-left: 4px solid var(--danger); margin-bottom: 2rem;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <div>
                    <h2 style="font-size: 1.5rem; margin-bottom: 0.5rem;">Total Monthly Leakage</h2>
                    <p style="color: var(--text-gray);">You're losing this much every month unnecessarily</p>
                </div>
                <div style="text-align: right;">
                    <div style="font-family: 'Mukta', sans-serif; font-size: 3rem; font-weight: 700; color: var(--danger);">₹${totalLeak.toLocaleString()}</div>
                    <div style="color: var(--text-gray);">Per month</div>
                </div>
            </div>
        </div>

        <div style="display: grid; gap: 2rem;">
            ${config.costLeaks.map((leak, index) => `
                <div class="leak-item">
                    <div class="leak-header">
                        <div class="leak-title">${index + 1}. ${leak.title}</div>
                        <div class="leak-amount">${leak.amount}</div>
                    </div>
                    <div class="leak-desc">${leak.desc}</div>
                    <div class="leak-solution">${leak.solution}</div>
                </div>
            `).join('')}
        </div>

        <div class="card" style="margin-top: 2rem; background: rgba(19, 136, 8, 0.05); border-left: 4px solid var(--secondary);">
            <h3 style="margin-bottom: 1rem; font-size: 1.3rem;">💡 If You Fix All These Issues</h3>
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; margin-top: 1.5rem;">
                <div style="text-align: center;">
                    <div style="font-size: 2rem; margin-bottom: 0.5rem;">📈</div>
                    <div style="font-size: 2rem; font-weight: 700; color: var(--secondary); margin-bottom: 0.25rem;">₹${totalLeak.toLocaleString()}</div>
                    <div style="color: var(--text-gray);">Monthly Savings</div>
                </div>
                <div style="text-align: center;">
                    <div style="font-size: 2rem; margin-bottom: 0.5rem;">💰</div>
                    <div style="font-size: 2rem; font-weight: 700; color: var(--secondary); margin-bottom: 0.25rem;">₹${(totalLeak * 12).toLocaleString()}</div>
                    <div style="color: var(--text-gray);">Yearly Savings</div>
                </div>
                <div style="text-align: center;">
                    <div style="font-size: 2rem; margin-bottom: 0.5rem;">⚡</div>
                    <div style="font-size: 2rem; font-weight: 700; color: var(--secondary); margin-bottom: 0.25rem;">${((totalLeak / businessData.stats.revenue) * 100).toFixed(1)}%</div>
                    <div style="color: var(--text-gray);">Profit Increase</div>
                </div>
            </div>
        </div>
    `;
}

function loadAreaInsightsPage(config) {
    const dashboard = document.getElementById('mainDashboard');
    
    dashboard.innerHTML = `
        <div class="page-header">
            <h1 class="page-title">📍 Area-Based Business Insights</h1>
            <p class="page-subtitle">Insights specific to ${businessData.area}, ${businessData.city}</p>
        </div>

        <div class="card" style="background: linear-gradient(135deg, rgba(255, 107, 0, 0.05), rgba(19, 136, 8, 0.05)); margin-bottom: 2rem;">
            <div style="display: flex; align-items: center; gap: 2rem;">
                <div style="width: 80px; height: 80px; background: linear-gradient(135deg, var(--primary), var(--secondary)); border-radius: 20px; display: flex; align-items: center; justify-content: center; font-size: 2.5rem; flex-shrink: 0;">
                    📍
                </div>
                <div>
                    <h2 style="font-size: 1.5rem; margin-bottom: 0.5rem;">Your Location: ${businessData.area}, ${businessData.city}</h2>
                    <p style="color: var(--text-gray); font-size: 1.05rem;">We've analyzed the demographics, competition, and opportunities in your area</p>
                </div>
            </div>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 2rem;">
            ${config.areaInsights.map(insight => `
                <div class="insight-item">
                    <div class="insight-icon">${insight.icon}</div>
                    <div class="insight-title" style="font-size: 1.15rem;">${insight.title}</div>
                    <div class="insight-desc" style="font-size: 1rem; line-height: 1.6;">${insight.desc}</div>
                </div>
            `).join('')}
        </div>

        <div class="card" style="margin-top: 2rem;">
            <h3 style="margin-bottom: 1.5rem; font-size: 1.3rem;">🎯 Action Plan for Your Area</h3>
            <div style="display: grid; gap: 1.25rem;">
                <div style="display: flex; gap: 1.5rem; padding: 1.25rem; background: var(--bg-light); border-radius: 12px;">
                    <div style="width: 40px; height: 40px; background: var(--primary); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; flex-shrink: 0;">1</div>
                    <div>
                        <h4 style="margin-bottom: 0.5rem;">Survey Your Immediate Neighborhood</h4>
                        <p style="color: var(--text-gray);">Walk 500m radius and note competing businesses, customer flow patterns, and peak hours</p>
                    </div>
                </div>
                <div style="display: flex; gap: 1.5rem; padding: 1.25rem; background: var(--bg-light); border-radius: 12px;">
                    <div style="width: 40px; height: 40px; background: var(--primary); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; flex-shrink: 0;">2</div>
                    <div>
                        <h4 style="margin-bottom: 0.5rem;">Build Local Partnerships</h4>
                        <p style="color: var(--text-gray);">Connect with nearby complementary businesses for mutual customer referrals</p>
                    </div>
                </div>
                <div style="display: flex; gap: 1.5rem; padding: 1.25rem; background: var(--bg-light); border-radius: 12px;">
                    <div style="width: 40px; height: 40px; background: var(--primary); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; flex-shrink: 0;">3</div>
                    <div>
                        <h4 style="margin-bottom: 0.5rem;">Join Local WhatsApp Groups</h4>
                        <p style="color: var(--text-gray);">Get active in residential society groups to promote your business and special offers</p>
                    </div>
                </div>
                <div style="display: flex; gap: 1.5rem; padding: 1.25rem; background: var(--bg-light); border-radius: 12px;">
                    <div style="width: 40px; height: 40px; background: var(--primary); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; flex-shrink: 0;">4</div>
                    <div>
                        <h4 style="margin-bottom: 0.5rem;">Adapt to Local Preferences</h4>
                        <p style="color: var(--text-gray);">Track what sells best in your area and stock accordingly. Local tastes vary significantly</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function loadInventoryPage(config) {
    const dashboard = document.getElementById('mainDashboard');
    
    dashboard.innerHTML = `
        <div class="page-header">
            <h1 class="page-title">📦 Inventory Management</h1>
            <p class="page-subtitle">Manage your ${config.name} inventory</p>
        </div>

        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-header">
                    <div class="stat-icon green">✅</div>
                    <div class="stat-change up">Good</div>
                </div>
                <div class="stat-value">${config.inventoryItems.filter(i => i.status === 'good').length}</div>
                <div class="stat-label">Items in Good Stock</div>
            </div>
            <div class="stat-card">
                <div class="stat-header">
                    <div class="stat-icon yellow">📊</div>
                    <div class="stat-change">Medium</div>
                </div>
                <div class="stat-value">${config.inventoryItems.filter(i => i.status === 'medium').length}</div>
                <div class="stat-label">Items Need Restock Soon</div>
            </div>
            <div class="stat-card">
                <div class="stat-header">
                    <div class="stat-icon orange">⚠️</div>
                    <div class="stat-change down">Low</div>
                </div>
                <div class="stat-value">${config.inventoryItems.filter(i => i.status === 'low').length}</div>
                <div class="stat-label">Items Critically Low</div>
            </div>
            <div class="stat-card">
                <div class="stat-header">
                    <div class="stat-icon blue">💰</div>
                </div>
                <div class="stat-value">₹${config.inventoryItems.reduce((sum, item) => sum + (item.stock * item.price), 0).toLocaleString()}</div>
                <div class="stat-label">Total Inventory Value</div>
            </div>
        </div>

        <div class="card">
            <div class="card-header">
                <h2 class="card-title">Complete Inventory List</h2>
                <button class="btn btn-primary">+ Add New Item</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Item Name</th>
                        <th>Current Stock</th>
                        <th>Unit</th>
                        <th>Price per Unit</th>
                        <th>Total Value</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    ${config.inventoryItems.map(item => `
                        <tr>
                            <td style="font-weight: 600;">${item.name}</td>
                            <td>${item.stock}</td>
                            <td>${item.unit}</td>
                            <td>₹${item.price}</td>
                            <td style="font-weight: 700;">₹${(item.stock * item.price).toLocaleString()}</td>
                            <td><span class="stock-badge ${item.status}">
                                ${item.status === 'low' ? '⚠️ Low Stock' : item.status === 'medium' ? '📊 Medium' : '✅ Good Stock'}
                            </span></td>
                            <td>
                                <button class="btn btn-primary" style="padding: 0.5rem 1rem; font-size: 0.85rem;">Update</button>
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>

        <div class="card" style="margin-top: 2rem; background: rgba(255, 107, 0, 0.05); border-left: 4px solid var(--primary);">
            <h3 style="margin-bottom: 1rem;">💡 Inventory Management Tips</h3>
            <ul style="list-style: none; padding: 0;">
                <li style="padding: 0.5rem 0;">✅ Always maintain at least 15 days stock for fast-moving items</li>
                <li style="padding: 0.5rem 0;">✅ Check expiry dates weekly to avoid wastage</li>
                <li style="padding: 0.5rem 0;">✅ Order in bulk during festival season for better prices</li>
                <li style="padding: 0.5rem 0;">✅ Keep digital records - never rely only on memory</li>
            </ul>
        </div>
    `;
}

// ADDITIONAL FUNCTIONALITY - PASTE THIS CODE AT THE END OF indian-business-manager.js (BEFORE THE LAST CLOSING BRACE)
// ============================================

// ============================================
// DATA STRUCTURES FOR NEW FEATURES
// ============================================

let customersData = [
    { id: 1, name: 'Ramesh Sharma', phone: '+91 98765 43210', email: 'ramesh@email.com', totalSpent: 15000, visits: 24, lastVisit: '2026-01-28', status: 'regular' },
    { id: 2, name: 'Priya Patel', phone: '+91 98765 43211', email: 'priya@email.com', totalSpent: 8500, visits: 12, lastVisit: '2026-01-27', status: 'regular' },
    { id: 3, name: 'Amit Kumar', phone: '+91 98765 43212', email: 'amit@email.com', totalSpent: 3200, visits: 5, lastVisit: '2026-01-25', status: 'new' },
    { id: 4, name: 'Sneha Reddy', phone: '+91 98765 43213', email: 'sneha@email.com', totalSpent: 22000, visits: 45, lastVisit: '2026-01-29', status: 'vip' }
];

let suppliersData = [
    { id: 1, name: 'Mumbai Wholesale Traders', contact: 'Rajesh Kumar', phone: '+91 98765 11111', category: 'General Goods', totalPurchases: 125000, paymentDue: 15000, status: 'active' },
    { id: 2, name: 'Anand Food Distributors', contact: 'Anand Gupta', phone: '+91 98765 22222', category: 'Food Items', totalPurchases: 85000, paymentDue: 0, status: 'active' },
    { id: 3, name: 'City Electronics Supply', contact: 'Suresh Menon', phone: '+91 98765 33333', category: 'Electronics', totalPurchases: 45000, paymentDue: 8500, status: 'active' }
];

let expensesData = [
    { id: 1, category: 'Rent', amount: 15000, date: '2026-01-01', description: 'Monthly shop rent', type: 'fixed', paymentMethod: 'Bank Transfer' },
    { id: 2, category: 'Electricity', amount: 2800, date: '2026-01-15', description: 'Electricity bill', type: 'variable', paymentMethod: 'Cash' },
    { id: 3, category: 'Salaries', amount: 25000, date: '2026-01-01', description: 'Staff salaries', type: 'fixed', paymentMethod: 'Bank Transfer' },
    { id: 4, category: 'Inventory Purchase', amount: 35000, date: '2026-01-20', description: 'Stock purchase from supplier', type: 'variable', paymentMethod: 'UPI' },
    { id: 5, category: 'Maintenance', amount: 1500, date: '2026-01-22', description: 'Equipment repair', type: 'variable', paymentMethod: 'Cash' }
];

let salesData = [
    { id: 1, customerName: 'Ramesh Sharma', items: 'Rice 5kg, Oil 2L', amount: 850, date: '2026-01-29', paymentMethod: 'Cash' },
    { id: 2, customerName: 'Priya Patel', items: 'Flour 10kg, Sugar 5kg', amount: 625, date: '2026-01-29', paymentMethod: 'UPI' },
    { id: 3, customerName: 'Walk-in Customer', items: 'Tea 1kg, Biscuits', amount: 520, date: '2026-01-28', paymentMethod: 'Cash' }
];

// ============================================
// CUSTOMERS PAGE
// ============================================

function loadCustomersPage(config) {
    const dashboard = document.getElementById('mainDashboard');
    
    dashboard.innerHTML = `
        <div class="page-header">
            <h1 class="page-title">👥 Customer Management</h1>
            <p class="page-subtitle">Manage and track your valuable customers</p>
        </div>

        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-header">
                    <div class="stat-icon blue">👥</div>
                    <div class="stat-change up">↑ 8%</div>
                </div>
                <div class="stat-value">${customersData.length}</div>
                <div class="stat-label">Total Customers</div>
            </div>
            <div class="stat-card">
                <div class="stat-header">
                    <div class="stat-icon green">⭐</div>
                </div>
                <div class="stat-value">${customersData.filter(c => c.status === 'vip').length}</div>
                <div class="stat-label">VIP Customers</div>
            </div>
            <div class="stat-card">
                <div class="stat-header">
                    <div class="stat-icon orange">💰</div>
                    <div class="stat-change up">↑ 12%</div>
                </div>
                <div class="stat-value">₹${customersData.reduce((sum, c) => sum + c.totalSpent, 0).toLocaleString()}</div>
                <div class="stat-label">Total Customer Spending</div>
            </div>
            <div class="stat-card">
                <div class="stat-header">
                    <div class="stat-icon yellow">🆕</div>
                </div>
                <div class="stat-value">${customersData.filter(c => c.status === 'new').length}</div>
                <div class="stat-label">New This Month</div>
            </div>
        </div>

        <div class="card">
            <div class="card-header">
                <h2 class="card-title">All Customers</h2>
                <button class="btn btn-primary" onclick="showAddCustomerModal()">+ Add New Customer</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Contact</th>
                        <th>Total Spent</th>
                        <th>Visits</th>
                        <th>Last Visit</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    ${customersData.map(customer => `
                        <tr>
                            <td style="font-weight: 600;">${customer.name}</td>
                            <td>
                                <div>${customer.phone}</div>
                                <div style="font-size: 0.85rem; color: var(--text-gray);">${customer.email}</div>
                            </td>
                            <td style="font-weight: 700; color: var(--secondary);">₹${customer.totalSpent.toLocaleString()}</td>
                            <td>${customer.visits}</td>
                            <td>${customer.lastVisit}</td>
                            <td><span class="stock-badge ${customer.status === 'vip' ? 'good' : customer.status === 'regular' ? 'medium' : 'low'}">
                                ${customer.status === 'vip' ? '⭐ VIP' : customer.status === 'regular' ? '👤 Regular' : '🆕 New'}
                            </span></td>
                            <td>
                                <button class="btn btn-primary" style="padding: 0.5rem 1rem; font-size: 0.85rem;" onclick="viewCustomerDetails(${customer.id})">View</button>
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>

        <div class="card" style="margin-top: 2rem;">
            <h3 style="margin-bottom: 1rem;">💡 Customer Retention Tips</h3>
            <ul style="list-style: none; padding: 0;">
                <li style="padding: 0.75rem; background: var(--bg-light); margin-bottom: 0.5rem; border-radius: 8px;">✅ Offer loyalty discounts to regular customers</li>
                <li style="padding: 0.75rem; background: var(--bg-light); margin-bottom: 0.5rem; border-radius: 8px;">✅ Send festival greetings via WhatsApp</li>
                <li style="padding: 0.75rem; background: var(--bg-light); margin-bottom: 0.5rem; border-radius: 8px;">✅ Remember their preferences and suggest products</li>
                <li style="padding: 0.75rem; background: var(--bg-light); border-radius: 8px;">✅ Create WhatsApp group for exclusive offers</li>
            </ul>
        </div>
    `;
}

// ============================================
// SUPPLIERS PAGE
// ============================================

function loadSuppliersPage(config) {
    const dashboard = document.getElementById('mainDashboard');
    const totalDue = suppliersData.reduce((sum, s) => sum + s.paymentDue, 0);
    
    dashboard.innerHTML = `
        <div class="page-header">
            <h1 class="page-title">🚚 Supplier Management</h1>
            <p class="page-subtitle">Track your suppliers and purchase orders</p>
        </div>

        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-header">
                    <div class="stat-icon blue">🚚</div>
                </div>
                <div class="stat-value">${suppliersData.length}</div>
                <div class="stat-label">Total Suppliers</div>
            </div>
            <div class="stat-card">
                <div class="stat-header">
                    <div class="stat-icon green">💰</div>
                </div>
                <div class="stat-value">₹${suppliersData.reduce((sum, s) => sum + s.totalPurchases, 0).toLocaleString()}</div>
                <div class="stat-label">Total Purchases</div>
            </div>
            <div class="stat-card">
                <div class="stat-header">
                    <div class="stat-icon orange">⚠️</div>
                    ${totalDue > 0 ? '<div class="stat-change down">Due</div>' : ''}
                </div>
                <div class="stat-value">₹${totalDue.toLocaleString()}</div>
                <div class="stat-label">Payment Due</div>
            </div>
            <div class="stat-card">
                <div class="stat-header">
                    <div class="stat-icon yellow">✅</div>
                </div>
                <div class="stat-value">${suppliersData.filter(s => s.status === 'active').length}</div>
                <div class="stat-label">Active Suppliers</div>
            </div>
        </div>

        <div class="card">
            <div class="card-header">
                <h2 class="card-title">All Suppliers</h2>
                <button class="btn btn-primary" onclick="showAddSupplierModal()">+ Add New Supplier</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Company Name</th>
                        <th>Contact Person</th>
                        <th>Category</th>
                        <th>Total Purchases</th>
                        <th>Payment Due</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    ${suppliersData.map(supplier => `
                        <tr>
                            <td style="font-weight: 600;">${supplier.name}</td>
                            <td>
                                <div>${supplier.contact}</div>
                                <div style="font-size: 0.85rem; color: var(--text-gray);">${supplier.phone}</div>
                            </td>
                            <td>${supplier.category}</td>
                            <td style="font-weight: 700;">₹${supplier.totalPurchases.toLocaleString()}</td>
                            <td style="font-weight: 700; color: ${supplier.paymentDue > 0 ? 'var(--danger)' : 'var(--secondary)'};">
                                ₹${supplier.paymentDue.toLocaleString()}
                            </td>
                            <td><span class="stock-badge good">✅ Active</span></td>
                            <td>
                                <button class="btn btn-primary" style="padding: 0.5rem 1rem; font-size: 0.85rem;" onclick="viewSupplierDetails(${supplier.id})">View</button>
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>

        <div class="card" style="margin-top: 2rem;">
            <h3 style="margin-bottom: 1rem;">💡 Supplier Management Tips</h3>
            <ul style="list-style: none; padding: 0;">
                <li style="padding: 0.75rem; background: var(--bg-light); margin-bottom: 0.5rem; border-radius: 8px;">✅ Always have 2-3 suppliers for critical items</li>
                <li style="padding: 0.75rem; background: var(--bg-light); margin-bottom: 0.5rem; border-radius: 8px;">✅ Negotiate better rates for bulk purchases</li>
                <li style="padding: 0.75rem; background: var(--bg-light); margin-bottom: 0.5rem; border-radius: 8px;">✅ Pay on time to maintain good relationships</li>
                <li style="padding: 0.75rem; background: var(--bg-light); border-radius: 8px;">✅ Compare prices quarterly to ensure best deals</li>
            </ul>
        </div>
    `;
}

// ============================================
// EXPENSES PAGE
// ============================================

function loadExpensesPage(config) {
    const dashboard = document.getElementById('mainDashboard');
    const totalExpenses = expensesData.reduce((sum, e) => sum + e.amount, 0);
    const fixedExpenses = expensesData.filter(e => e.type === 'fixed').reduce((sum, e) => sum + e.amount, 0);
    const variableExpenses = expensesData.filter(e => e.type === 'variable').reduce((sum, e) => sum + e.amount, 0);
    
    dashboard.innerHTML = `
        <div class="page-header">
            <h1 class="page-title">💸 Expense Management</h1>
            <p class="page-subtitle">Track and manage all business expenses</p>
        </div>

        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-header">
                    <div class="stat-icon orange">💸</div>
                    <div class="stat-change down">↓ 5%</div>
                </div>
                <div class="stat-value">₹${totalExpenses.toLocaleString()}</div>
                <div class="stat-label">Total Monthly Expenses</div>
            </div>
            <div class="stat-card">
                <div class="stat-header">
                    <div class="stat-icon blue">📌</div>
                </div>
                <div class="stat-value">₹${fixedExpenses.toLocaleString()}</div>
                <div class="stat-label">Fixed Expenses</div>
            </div>
            <div class="stat-card">
                <div class="stat-header">
                    <div class="stat-icon yellow">📊</div>
                </div>
                <div class="stat-value">₹${variableExpenses.toLocaleString()}</div>
                <div class="stat-label">Variable Expenses</div>
            </div>
            <div class="stat-card">
                <div class="stat-header">
                    <div class="stat-icon green">💰</div>
                    <div class="stat-change up">↑ 15%</div>
                </div>
                <div class="stat-value">₹${(businessData.stats.revenue - totalExpenses).toLocaleString()}</div>
                <div class="stat-label">Net Profit</div>
            </div>
        </div>

        <div class="card">
            <div class="card-header">
                <h2 class="card-title">Expense Records</h2>
                <button class="btn btn-primary" onclick="showAddExpenseModal()">+ Add New Expense</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Category</th>
                        <th>Description</th>
                        <th>Type</th>
                        <th>Payment Method</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    ${expensesData.sort((a, b) => new Date(b.date) - new Date(a.date)).map(expense => `
                        <tr>
                            <td>${expense.date}</td>
                            <td style="font-weight: 600;">${expense.category}</td>
                            <td style="color: var(--text-gray);">${expense.description}</td>
                            <td><span class="stock-badge ${expense.type === 'fixed' ? 'good' : 'medium'}">
                                ${expense.type === 'fixed' ? '📌 Fixed' : '📊 Variable'}
                            </span></td>
                            <td>${expense.paymentMethod}</td>
                            <td style="font-weight: 700; color: var(--danger);">₹${expense.amount.toLocaleString()}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>

        <div class="content-grid" style="margin-top: 2rem;">
            <div class="card">
                <h3 style="margin-bottom: 1.5rem;">Expense Breakdown by Category</h3>
                ${getExpensesByCategory().map(cat => `
                    <div style="margin-bottom: 1.5rem;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                            <span style="font-weight: 600;">${cat.name}</span>
                            <span style="font-weight: 700; color: var(--danger);">₹${cat.amount.toLocaleString()}</span>
                        </div>
                        <div style="background: var(--bg-light); height: 10px; border-radius: 5px; overflow: hidden;">
                            <div style="width: ${(cat.amount / totalExpenses) * 100}%; height: 100%; background: linear-gradient(90deg, var(--danger), var(--warning));"></div>
                        </div>
                        <div style="font-size: 0.85rem; color: var(--text-gray); margin-top: 0.25rem;">
                            ${((cat.amount / totalExpenses) * 100).toFixed(1)}% of total
                        </div>
                    </div>
                `).join('')}
            </div>

            <div class="card">
                <h3 style="margin-bottom: 1rem;">💡 Expense Control Tips</h3>
                <ul style="list-style: none; padding: 0;">
                    <li style="padding: 0.75rem; background: var(--bg-light); margin-bottom: 0.5rem; border-radius: 8px;">✅ Review all subscriptions monthly</li>
                    <li style="padding: 0.75rem; background: var(--bg-light); margin-bottom: 0.5rem; border-radius: 8px;">✅ Negotiate rent and utility bills</li>
                    <li style="padding: 0.75rem; background: var(--bg-light); margin-bottom: 0.5rem; border-radius: 8px;">✅ Use energy-efficient equipment</li>
                    <li style="padding: 0.75rem; background: var(--bg-light); margin-bottom: 0.5rem; border-radius: 8px;">✅ Buy in bulk to save on inventory</li>
                    <li style="padding: 0.75rem; background: var(--bg-light); border-radius: 8px;">✅ Track every small expense daily</li>
                </ul>
            </div>
        </div>
    `;
}

function getExpensesByCategory() {
    const categories = {};
    expensesData.forEach(expense => {
        if (!categories[expense.category]) {
            categories[expense.category] = 0;
        }
        categories[expense.category] += expense.amount;
    });
    
    return Object.entries(categories).map(([name, amount]) => ({ name, amount }));
}

// ============================================
// SETTINGS PAGE
// ============================================

function loadSettingsPage(config) {
    const dashboard = document.getElementById('mainDashboard');
    
    dashboard.innerHTML = `
        <div class="page-header">
            <h1 class="page-title">⚙️ Settings</h1>
            <p class="page-subtitle">Manage your business settings and preferences</p>
        </div>

        <div class="content-grid">
            <div class="card">
                <h3 style="margin-bottom: 1.5rem;">Business Information</h3>
                <div class="form-group">
                    <label>Business Name</label>
                    <input type="text" value="${businessData.name}" id="settingsBusinessName">
                </div>
                <div class="form-group">
                    <label>Owner Name</label>
                    <input type="text" value="${businessData.owner}" id="settingsOwnerName">
                </div>
                <div class="form-group">
                    <label>Business Type</label>
                    <input type="text" value="${config.name}" disabled style="background: var(--bg-light);">
                </div>
                <div class="form-group">
                    <label>Mobile Number</label>
                    <input type="tel" value="${businessData.mobile}" id="settingsMobile">
                </div>
                <button class="btn btn-primary" style="width: 100%;" onclick="saveBusinessSettings()">Save Changes</button>
            </div>

            <div class="card">
                <h3 style="margin-bottom: 1.5rem;">Location Details</h3>
                <div class="form-group">
                    <label>City</label>
                    <input type="text" value="${businessData.city}" id="settingsCity">
                </div>
                <div class="form-group">
                    <label>Area/Locality</label>
                    <input type="text" value="${businessData.area}" id="settingsArea">
                </div>
                <div class="form-group">
                    <label>Full Address</label>
                    <textarea style="width: 100%; padding: 0.875rem; border: 2px solid var(--border); border-radius: 12px; font-family: 'Poppins', sans-serif; min-height: 100px;" placeholder="Enter complete business address"></textarea>
                </div>
                <button class="btn btn-primary" style="width: 100%;">Update Location</button>
            </div>
        </div>

        <div class="card" style="margin-top: 2rem;">
            <h3 style="margin-bottom: 1.5rem;">Notification Preferences</h3>
            <div style="display: grid; gap: 1rem;">
                ${[
                    'Low stock alerts',
                    'Daily sales summary',
                    'Payment reminders',
                    'Customer birthday notifications',
                    'Supplier payment due alerts',
                    'Monthly performance reports'
                ].map(pref => `
                    <label style="display: flex; align-items: center; gap: 0.75rem; padding: 1rem; background: var(--bg-light); border-radius: 12px; cursor: pointer;">
                        <input type="checkbox" checked style="width: 20px; height: 20px; cursor: pointer;">
                        <span style="font-weight: 500;">${pref}</span>
                    </label>
                `).join('')}
            </div>
            <button class="btn btn-primary" style="width: 100%; margin-top: 1.5rem;">Save Preferences</button>
        </div>

        <div class="card" style="margin-top: 2rem; border-left: 4px solid var(--info);">
            <h3 style="margin-bottom: 1.5rem;">👨‍💻 Developer Information</h3>
            <div style="background: var(--bg-light); padding: 1.5rem; border-radius: 12px;">
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem;">
                    <div>
                        <div style="font-size: 0.85rem; color: var(--text-gray); margin-bottom: 0.5rem;">Lead Developer</div>
                        <div style="font-weight: 600; font-size: 1.1rem;">Vishnu Kusi</div>
                        <div style="font-size: 0.9rem; color: var(--text-gray);">vishnu.dev@businesshub.com</div>
                    </div>
                    <div>
                        <div style="font-size: 0.85rem; color: var(--text-gray); margin-bottom: 0.5rem;">UI/UX Designer</div>
                        <div style="font-weight: 600; font-size: 1.1rem;">Teja Sree</div>
                        <div style="font-size: 0.9rem; color: var(--text-gray);">teju.design@businesshub.com</div>
                    </div>
                </div>
                <div style="margin-top: 1.5rem; padding-top: 1.5rem; border-top: 1px solid var(--border);">
                    <div style="font-size: 0.85rem; color: var(--text-gray); margin-bottom: 0.5rem;">Version</div>
                    <div style="font-weight: 600;">BusinessHub v2.1.0</div>
                    <div style="font-size: 0.9rem; color: var(--text-gray); margin-top: 0.25rem;">Last Updated: January 2026</div>
                </div>
            </div>
        </div>

        <div class="card" style="margin-top: 2rem; background: linear-gradient(135deg, rgba(239, 68, 68, 0.05), rgba(239, 68, 68, 0.1)); border-left: 4px solid var(--danger);">
            <h3 style="margin-bottom: 1rem; color: var(--danger);">⚠️ Danger Zone</h3>
            <p style="color: var(--text-gray); margin-bottom: 1.5rem;">These actions are irreversible. Please be careful.</p>
            <div style="display: flex; gap: 1rem;">
                <button class="btn" style="background: var(--danger); color: white; flex: 1;">Reset All Data</button>
                <button class="btn" style="background: var(--danger); color: white; flex: 1;">Delete Account</button>
            </div>
        </div>
    `;
}

// ============================================
// SALES PAGE
// ============================================

function loadSalesPage(config) {
    const dashboard = document.getElementById('mainDashboard');
    const totalSales = salesData.reduce((sum, s) => sum + s.amount, 0);
    
    dashboard.innerHTML = `
        <div class="page-header">
            <h1 class="page-title">💰 Sales Management</h1>
            <p class="page-subtitle">Track and manage all sales transactions</p>
        </div>

        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-header">
                    <div class="stat-icon green">💰</div>
                    <div class="stat-change up">↑ 15%</div>
                </div>
                <div class="stat-value">₹${totalSales.toLocaleString()}</div>
                <div class="stat-label">Today's Sales</div>
            </div>
            <div class="stat-card">
                <div class="stat-header">
                    <div class="stat-icon blue">📊</div>
                </div>
                <div class="stat-value">${salesData.length}</div>
                <div class="stat-label">Transactions Today</div>
            </div>
            <div class="stat-card">
                <div class="stat-header">
                    <div class="stat-icon orange">💳</div>
                </div>
                <div class="stat-value">₹${(totalSales / salesData.length).toFixed(0)}</div>
                <div class="stat-label">Average Bill Size</div>
            </div>
            <div class="stat-card">
                <div class="stat-header">
                    <div class="stat-icon yellow">📱</div>
                </div>
                <div class="stat-value">${salesData.filter(s => s.paymentMethod === 'UPI').length}</div>
                <div class="stat-label">Digital Payments</div>
            </div>
        </div>

        <div class="card">
            <div class="card-header">
                <h2 class="card-title">Recent Sales</h2>
                <button class="btn btn-primary" onclick="showAddSaleModal()">+ Add New Sale</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Customer</th>
                        <th>Items</th>
                        <th>Payment Method</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    ${salesData.map(sale => `
                        <tr>
                            <td>${sale.date}</td>
                            <td style="font-weight: 600;">${sale.customerName}</td>
                            <td style="color: var(--text-gray);">${sale.items}</td>
                            <td><span class="stock-badge ${sale.paymentMethod === 'Cash' ? 'medium' : 'good'}">
                                ${sale.paymentMethod === 'Cash' ? '💵 Cash' : sale.paymentMethod === 'UPI' ? '📱 UPI' : '💳 Card'}
                            </span></td>
                            <td style="font-weight: 700; color: var(--secondary);">₹${sale.amount.toLocaleString()}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `;
}

// ============================================
// MODAL FUNCTIONS
// ============================================

function showAddCustomerModal() {
    const modal = createModal('Add New Customer', `
        <div class="form-group">
            <label>Customer Name</label>
            <input type="text" id="newCustomerName" placeholder="Enter customer name">
        </div>
        <div class="form-group">
            <label>Phone Number</label>
            <input type="tel" id="newCustomerPhone" placeholder="+91 98765 43210">
        </div>
        <div class="form-group">
            <label>Email (Optional)</label>
            <input type="email" id="newCustomerEmail" placeholder="customer@email.com">
        </div>
        <div style="display: flex; gap: 1rem; margin-top: 2rem;">
            <button class="btn btn-primary" style="flex: 1;" onclick="addCustomer()">Add Customer</button>
            <button class="btn" style="flex: 1; background: var(--text-gray); color: white;" onclick="closeModal()">Cancel</button>
        </div>
    `);
    document.body.appendChild(modal);
}

function showAddSupplierModal() {
    const modal = createModal('Add New Supplier', `
        <div class="form-group">
            <label>Company Name</label>
            <input type="text" id="newSupplierName" placeholder="Enter company name">
        </div>
        <div class="form-group">
            <label>Contact Person</label>
            <input type="text" id="newSupplierContact" placeholder="Contact person name">
        </div>
        <div class="form-group">
            <label>Phone Number</label>
            <input type="tel" id="newSupplierPhone" placeholder="+91 98765 43210">
        </div>
        <div class="form-group">
            <label>Category</label>
            <select id="newSupplierCategory">
                <option>General Goods</option>
                <option>Food Items</option>
                <option>Electronics</option>
                <option>Stationery</option>
                <option>Other</option>
            </select>
        </div>
        <div style="display: flex; gap: 1rem; margin-top: 2rem;">
            <button class="btn btn-primary" style="flex: 1;" onclick="addSupplier()">Add Supplier</button>
            <button class="btn" style="flex: 1; background: var(--text-gray); color: white;" onclick="closeModal()">Cancel</button>
        </div>
    `);
    document.body.appendChild(modal);
}

function showAddExpenseModal() {
    const modal = createModal('Record New Expense', `
        <div class="form-group">
            <label>Category</label>
            <select id="newExpenseCategory">
                <option>Rent</option>
                <option>Electricity</option>
                <option>Salaries</option>
                <option>Inventory Purchase</option>
                <option>Maintenance</option>
                <option>Marketing</option>
                <option>Transportation</option>
                <option>Other</option>
            </select>
        </div>
        <div class="form-group">
            <label>Amount</label>
            <input type="number" id="newExpenseAmount" placeholder="Enter amount">
        </div>
        <div class="form-group">
            <label>Description</label>
            <input type="text" id="newExpenseDescription" placeholder="Brief description">
        </div>
        <div class="form-group">
            <label>Type</label>
            <select id="newExpenseType">
                <option value="fixed">Fixed</option>
                <option value="variable">Variable</option>
            </select>
        </div>
        <div class="form-group">
            <label>Payment Method</label>
            <select id="newExpensePayment">
                <option>Cash</option>
                <option>UPI</option>
                <option>Bank Transfer</option>
                <option>Card</option>
            </select>
        </div>
        <div style="display: flex; gap: 1rem; margin-top: 2rem;">
            <button class="btn btn-primary" style="flex: 1;" onclick="addExpense()">Record Expense</button>
            <button class="btn" style="flex: 1; background: var(--text-gray); color: white;" onclick="closeModal()">Cancel</button>
        </div>
    `);
    document.body.appendChild(modal);
}

function showAddSaleModal() {
    const modal = createModal('Add New Sale', `
        <div class="form-group">
            <label>Customer Name</label>
            <input type="text" id="newSaleCustomer" placeholder="Enter customer name or 'Walk-in'">
        </div>
        <div class="form-group">
            <label>Items Sold</label>
            <input type="text" id="newSaleItems" placeholder="e.g., Rice 5kg, Oil 2L">
        </div>
        <div class="form-group">
            <label>Amount</label>
            <input type="number" id="newSaleAmount" placeholder="Enter total amount">
        </div>
        <div class="form-group">
            <label>Payment Method</label>
            <select id="newSalePayment">
                <option>Cash</option>
                <option>UPI</option>
                <option>Card</option>
            </select>
        </div>
        <div style="display: flex; gap: 1rem; margin-top: 2rem;">
            <button class="btn btn-primary" style="flex: 1;" onclick="addSale()">Record Sale</button>
            <button class="btn" style="flex: 1; background: var(--text-gray); color: white;" onclick="closeModal()">Cancel</button>
        </div>
    `);
    document.body.appendChild(modal);
}

function showAddInventoryModal() {
    const modal = createModal('Add Inventory Item', `
        <div class="form-group">
            <label>Item Name</label>
            <input type="text" id="newInventoryName" placeholder="Enter item name">
        </div>
        <div class="form-group">
            <label>Stock Quantity</label>
            <input type="number" id="newInventoryStock" placeholder="Enter quantity">
        </div>
        <div class="form-group">
            <label>Unit</label>
            <input type="text" id="newInventoryUnit" placeholder="kg, L, pcs, etc.">
        </div>
        <div class="form-group">
            <label>Price per Unit</label>
            <input type="number" id="newInventoryPrice" placeholder="Enter price">
        </div>
        <div style="display: flex; gap: 1rem; margin-top: 2rem;">
            <button class="btn btn-primary" style="flex: 1;" onclick="addInventoryItem()">Add Item</button>
            <button class="btn" style="flex: 1; background: var(--text-gray); color: white;" onclick="closeModal()">Cancel</button>
        </div>
    `);
    document.body.appendChild(modal);
}

// ============================================
// CREATE MODAL HELPER
// ============================================

function createModal(title, content) {
    const modal = document.createElement('div');
    modal.id = 'dynamicModal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        backdrop-filter: blur(5px);
    `;
    
    modal.innerHTML = `
        <div style="background: white; border-radius: 24px; padding: 2.5rem; max-width: 500px; width: 90%; max-height: 90vh; overflow-y: auto; animation: slideUp 0.3s ease;">
            <h2 style="font-family: 'Mukta', sans-serif; font-size: 1.75rem; margin-bottom: 2rem; color: var(--text-dark);">${title}</h2>
            ${content}
        </div>
    `;
    
    return modal;
}

function closeModal() {
    const modal = document.getElementById('dynamicModal');
    if (modal) modal.remove();
}

// ============================================
// ADD FUNCTIONS
// ============================================

function addCustomer() {
    const name = document.getElementById('newCustomerName').value;
    const phone = document.getElementById('newCustomerPhone').value;
    const email = document.getElementById('newCustomerEmail').value;
    
    if (!name || !phone) {
        alert('Please fill in required fields');
        return;
    }
    
    const newCustomer = {
        id: customersData.length + 1,
        name: name,
        phone: phone,
        email: email || 'N/A',
        totalSpent: 0,
        visits: 0,
        lastVisit: new Date().toISOString().split('T')[0],
        status: 'new'
    };
    
    customersData.push(newCustomer);
    closeModal();
    loadCustomersPage(businessConfigs[businessData.type]);
    showNotification('Success!', 'Customer added successfully', 'success');
}

function addSupplier() {
    const name = document.getElementById('newSupplierName').value;
    const contact = document.getElementById('newSupplierContact').value;
    const phone = document.getElementById('newSupplierPhone').value;
    const category = document.getElementById('newSupplierCategory').value;
    
    if (!name || !contact || !phone) {
        alert('Please fill in all fields');
        return;
    }
    
    const newSupplier = {
        id: suppliersData.length + 1,
        name: name,
        contact: contact,
        phone: phone,
        category: category,
        totalPurchases: 0,
        paymentDue: 0,
        status: 'active'
    };
    
    suppliersData.push(newSupplier);
    closeModal();
    loadSuppliersPage(businessConfigs[businessData.type]);
    showNotification('Success!', 'Supplier added successfully', 'success');
}

function addExpense() {
    const category = document.getElementById('newExpenseCategory').value;
    const amount = parseInt(document.getElementById('newExpenseAmount').value);
    const description = document.getElementById('newExpenseDescription').value;
    const type = document.getElementById('newExpenseType').value;
    const paymentMethod = document.getElementById('newExpensePayment').value;
    
    if (!amount || !description) {
        alert('Please fill in all fields');
        return;
    }
    
    const newExpense = {
        id: expensesData.length + 1,
        category: category,
        amount: amount,
        date: new Date().toISOString().split('T')[0],
        description: description,
        type: type,
        paymentMethod: paymentMethod
    };
    
    expensesData.push(newExpense);
    closeModal();
    loadExpensesPage(businessConfigs[businessData.type]);
    showNotification('Success!', 'Expense recorded successfully', 'success');
}

function addSale() {
    const customer = document.getElementById('newSaleCustomer').value;
    const items = document.getElementById('newSaleItems').value;
    const amount = parseInt(document.getElementById('newSaleAmount').value);
    const paymentMethod = document.getElementById('newSalePayment').value;
    
    if (!customer || !items || !amount) {
        alert('Please fill in all fields');
        return;
    }
    
    const newSale = {
        id: salesData.length + 1,
        customerName: customer,
        items: items,
        amount: amount,
        date: new Date().toISOString().split('T')[0],
        paymentMethod: paymentMethod
    };
    
    salesData.push(newSale);
    businessData.stats.revenue += amount;
    closeModal();
    loadSalesPage(businessConfigs[businessData.type]);
    showNotification('Success!', 'Sale recorded successfully', 'success');
}

function addInventoryItem() {
    const name = document.getElementById('newInventoryName').value;
    const stock = parseInt(document.getElementById('newInventoryStock').value);
    const unit = document.getElementById('newInventoryUnit').value;
    const price = parseInt(document.getElementById('newInventoryPrice').value);
    
    if (!name || !stock || !unit || !price) {
        alert('Please fill in all fields');
        return;
    }
    
    const config = businessConfigs[businessData.type];
    const status = stock > 50 ? 'good' : stock > 20 ? 'medium' : 'low';
    
    config.inventoryItems.push({
        name: name,
        stock: stock,
        unit: unit,
        price: price,
        status: status
    });
    
    closeModal();
    loadInventoryPage(config);
    showNotification('Success!', 'Inventory item added successfully', 'success');
}

// ============================================
// VIEW DETAILS FUNCTIONS
// ============================================

function viewCustomerDetails(id) {
    const customer = customersData.find(c => c.id === id);
    alert(`Customer Details:\n\nName: ${customer.name}\nPhone: ${customer.phone}\nEmail: ${customer.email}\nTotal Spent: ₹${customer.totalSpent}\nVisits: ${customer.visits}\nStatus: ${customer.status}`);
}

function viewSupplierDetails(id) {
    const supplier = suppliersData.find(s => s.id === id);
    alert(`Supplier Details:\n\nCompany: ${supplier.name}\nContact: ${supplier.contact}\nPhone: ${supplier.phone}\nCategory: ${supplier.category}\nTotal Purchases: ₹${supplier.totalPurchases}\nPayment Due: ₹${supplier.paymentDue}`);
}

// ============================================
// SETTINGS SAVE FUNCTION
// ============================================

function saveBusinessSettings() {
    businessData.name = document.getElementById('settingsBusinessName').value;
    businessData.owner = document.getElementById('settingsOwnerName').value;
    businessData.mobile = document.getElementById('settingsMobile').value;
    businessData.city = document.getElementById('settingsCity').value;
    businessData.area = document.getElementById('settingsArea').value;
    
    // Update sidebar
    document.getElementById('sidebarBusinessName').textContent = businessData.name;
    document.getElementById('sidebarBusinessLocation').textContent = `📍 ${businessData.area}, ${businessData.city}`;
    
    showNotification('Success!', 'Settings saved successfully', 'success');
}

// ============================================
// NOTIFICATION HELPER (if not already present)
// ============================================

function showNotification(title, message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <div class="notification-content">
            <div class="notification-icon ${type}">
                ${type === 'success' ? '✓' : type === 'error' ? '✕' : 'ℹ'}
            </div>
            <div>
                <div class="notification-title">${title}</div>
                <div class="notification-message">${message}</div>
            </div>
        </div>
        <div class="notification-close" onclick="this.parentElement.remove()">✕</div>
    `;
    
    if (!document.getElementById('notification-styles')) {
        const styles = document.createElement('style');
        styles.id = 'notification-styles';
        styles.textContent = `
            .notification {
                position: fixed;
                top: 100px;
                right: 2rem;
                background: white;
                border: 1px solid var(--border);
                border-radius: 12px;
                padding: 1.25rem;
                min-width: 320px;
                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
                z-index: 10000;
                animation: slideInRight 0.4s ease;
                display: flex;
                justify-content: space-between;
                gap: 1rem;
            }
            
            .notification-content {
                display: flex;
                gap: 1rem;
                align-items: flex-start;
            }
            
            .notification-icon {
                width: 36px;
                height: 36px;
                border-radius: 8px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: 700;
                flex-shrink: 0;
            }
            
            .notification-icon.success {
                background: rgba(16, 185, 129, 0.15);
                color: var(--success);
            }
            
            .notification-icon.error {
                background: rgba(239, 68, 68, 0.15);
                color: var(--danger);
            }
            
            .notification-icon.info {
                background: rgba(59, 130, 246, 0.15);
                color: var(--info);
            }
            
            .notification-title {
                font-weight: 600;
                margin-bottom: 0.25rem;
            }
            
            .notification-message {
                font-size: 0.85rem;
                color: var(--text-gray);
            }
            
            .notification-close {
                width: 24px;
                height: 24px;
                border-radius: 6px;
                background: var(--bg-light);
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                transition: all 0.3s ease;
                flex-shrink: 0;
            }
            
            .notification-close:hover {
                background: rgba(239, 68, 68, 0.15);
                color: var(--danger);
            }
            
            @keyframes slideInRight {
                from {
                    transform: translateX(400px);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
        `;
        document.head.appendChild(styles);
    }
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideInRight 0.4s ease reverse';
        setTimeout(() => notification.remove(), 400);
    }, 5000);
}

// ============================================
// UPDATE NAVIGATION TO INCLUDE NEW PAGES
// ============================================

// PASTE THIS INSIDE THE loadPage() FUNCTION SWITCH STATEMENT (BEFORE THE default CASE)



document.addEventListener('DOMContentLoaded', () => {
    // Attach handlers to quick action cards once DOM loads
    setTimeout(() => {
        const actionCards = document.querySelectorAll('.action-card');
        if (actionCards.length > 0) {
            actionCards[0].addEventListener('click', () => showAddSaleModal());
            actionCards[1].addEventListener('click', () => showAddInventoryModal());
            actionCards[2].addEventListener('click', () => showAddCustomerModal());
            actionCards[3].addEventListener('click', () => showAddExpenseModal());
        }
    }, 1000);
});

// ============================================
// INITIALIZATION
// ============================================


window.addEventListener('load', () => {
    console.log('🇮🇳 BusinessHub Initialized - Smart Management for Indian Small Businesses');
});