# AI Refund Agent 

An intelligent customer refund decision system built with Next.js and Express.js. Uses policy-based decision logic to approve or deny refund requests in real-time.

  Live : https://ai-refund-agent-4nm2.vercel.app/
  
- Backend API: https://ai-refund-agent-backend-3.onrender.com
- Backend Code: https://github.com/rinshadpr477-cell/AI-REFUND-AGENT_BACKEND

##  Features

✅ 15 Customer Profiles - Mock CRM with diverse account statuses  
✅ Intelligent Refund Logic** - 4 policy rules with real-time decision making  
✅ Dashboard - Analytics, request history, and decision logs  
✅ UI - designed with Tailwind CSS & Next.js  
✅ Real-time Reasoning - Full transparency of AI decision process  
✅ Production Ready - Deployed on Vercel (frontend) + Render (backend)  
✅ **Responsive Design** - Mobile-friendly interface  

##  Refund Policy Rules

The system evaluates refund requests against 4 key policy rules:

| Rule | Description | Impact |
|------|-------------|--------|
| **Return Window** | Maximum 30 days from purchase | ❌ Auto-deny if outside window |
| **Account Status** | Account must be "active" | ❌ Auto-deny if suspended |
| **Refund Cap** | Maximum $500 per request | ❌ Auto-deny if exceeds cap |
| **Deduction** | 50% deduction after 15 days | ✅ Partial refund if applicable |

##  Architecture
┌─────────────────────────────────────────────────────┐

│              Frontend (Next.js 14)                   │

│   - Customer Chat Interface                         │

│   - Admin Dashboard with Analytics                  │

│   - Authentication (Login/Logout)                   │

│   - Real-time Reasoning Display                     │

└────────────────────┬────────────────────────────────┘

│ API Calls

↓

┌─────────────────────────────────────────────────────┐

│              Backend (Express.js)                    │

│   - Refund Decision Engine                          │

│   - Policy Validation Service                       │

│   - Customer Lookup Service                         │

│   - Decision Logging Service                        │

└────────────────────┬────────────────────────────────┘

│ Data Access

↓

┌─────────────────────────────────────────────────────┐

│            Mock Database (JSON Files)                │

│   - customers.json (15 profiles)                    │

│   - refundPolicy.json (4 rules)                     │

└─────────────────────────────────────────────────────┘

##  Test Cases

### Test Case 1: Approval ✅

Customer ID: CUST001
Amount: $100
Days Since Purchase: 10
Result: ✅ APPROVED
Reason: All policy rules satisfied
Refund Amount: $100

**Expected Reasoning:**
- ✅ Customer found (Alice Johnson)
- ✅ Account is active
- ✅ Within 30-day return window (10 days)
- ✅ Amount within $500 cap
- ✅ No deduction (within 15 days)

---

### Test Case 2: Denial ❌
Customer ID: CUST003
Amount: $50
Days Since Purchase: 10
Result: ❌ DENIED
Reason: Account is suspended

**Expected Reasoning:**
- ✅ Customer found (Charlie Brown)
- ❌ Account is suspended (policy violation)
- ❌ Refund denied due to account status

---

### Test Case 3: Partial Refund ✅
Customer ID: CUST005
Amount: $200
Days Since Purchase: 20
Result: ✅ APPROVED
Reason: Refund approved with 50% deduction

**Expected Reasoning:**
- ✅ Customer found (Evan Brown)
- ✅ Account is active
- ✅ Within 30-day return window (20 days)
- ✅ Amount within $500 cap
- ⚠️ 50% deduction applied (purchased > 15 days ago)

---

### Test Case 4: Outside Return Window ❌efund Amount: $100 (50% deduction applied)
Customer ID: CUST001
Amount: $100
Days Since Purchase: 35
Result: ❌ DENIED
Reason: Purchase is outside 30-day return window

### Test Case 5: Over Refund Cap ❌
Customer ID: CUST001
Amount: $600
Days Since Purchase: 10
Result: ❌ DENIED
Reason: Refund amount exceeds $500 policy cap

<img width="1890" height="1020" alt="image" src="https://github.com/user-attachments/assets/d7a27fa2-5c51-4d06-a6d8-dbfcbbc03bd4" />


