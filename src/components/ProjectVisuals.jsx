import React from 'react';

export function RecruitmentArchitectureVisual() {
  return (
    <div
      className="schematic-box"
      role="img"
      aria-label="Architecture diagram of the Recruitment and Candidate Screening System"
    >
      <div className="schematic-header">
        <span>ARCHITECTURE // ASP.NET CORE MVC</span>
        <span>SQLITE + STRIPE</span>
      </div>
      <div className="schematic-layers">
        <div className="schematic-node">
          <div className="schematic-node-title">
            1. Presentation &amp; Screening Workflows
          </div>
          <div className="schematic-node-meta">
            Razor Views &bull; Job Postings &bull; Candidate Applications &bull; Screening Pipeline
          </div>
        </div>
        <div className="schematic-node">
          <div className="schematic-node-title">
            2. Authentication &amp; Role-Based Access
          </div>
          <div className="schematic-node-meta">
            ASP.NET Core Identity &bull; Role Authorization &bull; Session Security
          </div>
        </div>
        <div className="schematic-node">
          <div className="schematic-node-title">
            3. Domain Logic &amp; Payment Integration
          </div>
          <div className="schematic-node-meta">
            C# MVC Controllers &bull; CRUD Operations &bull; Stripe Payment API
          </div>
        </div>
        <div className="schematic-node">
          <div className="schematic-node-title">
            4. Relational Data Persistence
          </div>
          <div className="schematic-node-meta">
            Entity Framework Core &bull; LINQ Queries &bull; SQLite Database
          </div>
        </div>
      </div>
    </div>
  );
}

export function FoodOrderingArchitectureVisual() {
  return (
    <div
      className="schematic-box"
      role="img"
      aria-label="Architecture diagram of the Online Food Ordering Web Application"
    >
      <div className="schematic-header">
        <span>SYSTEM FLOW // FOOD ORDERING MVC</span>
        <span>EF CORE + STRIPE</span>
      </div>
      <div className="schematic-layers">
        <div className="schematic-node">
          <div className="schematic-node-title">Catalog &amp; Order Management</div>
          <div className="schematic-node-meta">
            ASP.NET Core MVC Controllers &bull; C# Models &bull; Order State
          </div>
        </div>
        <div className="schematic-node">
          <div className="schematic-node-title">Identity &amp; Stripe Checkout</div>
          <div className="schematic-node-meta">
            ASP.NET Core Identity Auth &bull; Stripe Payment Processing
          </div>
        </div>
        <div className="schematic-node">
          <div className="schematic-node-title">Database Layer</div>
          <div className="schematic-node-meta">
            Entity Framework Core ORM &bull; SQLite Relational Storage
          </div>
        </div>
      </div>
    </div>
  );
}