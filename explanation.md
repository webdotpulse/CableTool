### Calculation Clarification: GALAXY P120 (185A) vs. GALAXY P80 (125A)

My apologies for any confusion. Let's clarify the results for the two different chargers we discussed.

You are correct that we previously calculated a **70 mm²** section. However, that was for the **GALAXY P80 (80 kW)** charger, which has a 125A input current.

For the charger you are asking about now, the **GALAXY P120 (120 kW)** with its higher **185A** input current, the calculation results in a larger cable. Here is the specific calculation for that charger under the same conditions (40°C, 3 cables grouped):

1.  **Load Current:** 185A
2.  **Required Breaker:** The breaker must be sized for at least `1.25 x 185A = 231.25A`. The next standard size is **250A**.
3.  **Correction Factors:** The combined correction factor for temperature (0.91) and grouping (0.80) is **0.728**.
4.  **Required Cable Rating:** The cable must be rated for the breaker, accounting for the correction factors. So, the cable needs a base rating of at least `250A / 0.728 = **343.4A**`.
5.  **Cable Selection:**
    *   A 70 mm² cable is rated for 246A (too small).
    *   A 95 mm² cable is rated for 299A (too small).
    *   The first section that meets the 343.4A requirement is **120 mm²** (which is rated for 346A).

---

#### Summary:

*   **P80 (125A load):** Requires a **70 mm²** cable.
*   **P120 (185A load):** Requires a **120 mm²** cable.

I hope this clears up the difference between the two results.
