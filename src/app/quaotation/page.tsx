"use client";
import { Spacer } from "@nextui-org/react";
import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

function Page() {
  return (
    <div className="">
      <h1 className="text-[50px] text-primary ">
        Project Proposal: Inspection Management System
      </h1>
      <Spacer y={4} />
      <h3 className="text-[30px] text-primary bg-gray-100">
        Project Overview{" "}
      </h3>
      <Spacer y={2} />
      <p>
        The Inspection Management System is an integrated platform designed to
        streamline the scheduling, execution, and review of various types of
        inspections. This system includes an Android application for both Admins
        and Inspectors, along with a web application for Admin use, ensuring
        comprehensive management and oversight of inspection processes..
      </p>
      <Spacer y={4} />
      <h3 className="text-[30px] text-primary bg-gray-100">Objectives </h3>
      <Spacer y={2} />
      <ol>
        <li>
          <span className="font-bold">Enhance Inspection Efficiency:</span>{" "}
          Facilitate efficient scheduling and execution of inspections.
        </li>
        <li>
          <span className="font-bold">Improve Data Accuracy:</span> Ensure
          precise recording and reporting of inspection data.
        </li>
        <li>
          <span className="font-bold">Enable Offline Functionality:</span> Allow
          inspectors to access tasks and record data without internet
          connectivity.
        </li>
        <li>
          <span className="font-bold">Ensure Secure Data Storage:</span> Utilize
          a cloud-based database for secure and centralized data management.
        </li>
        <li>
          <span className="font-bold">Integrate GPS Functionality:</span> Verify
          inspection locations using GPS to ensure accuracy.
        </li>
      </ol>
      <Spacer y={4} />
      <h3 className="text-[30px] text-primary bg-gray-100">Focus Points </h3>
      <Spacer y={2} />
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h4 className="text-[18px] text-accent">Platforms</h4>
          <ul>
            <li>
              <span className="font-bold">Android Application:</span> For both
              Admins and Inspectors to manage and conduct inspections.
            </li>
            <li>
              <span className="font-bold"> Web Application:</span> For Admin use
              to oversee and manage inspection processes.
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-[18px] text-accent">Database</h4>
          <ul>
            <li>
              <span className="font-bold"> Cloud-based Database:</span> A secure
              platform to store inspection data, including item details, site
              information, photos, and reports.
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-[18px] text-accent">Offline Functionality</h4>
          <ul>
            <li>
              <span className="font-bold">Partial Offline Functionality:</span>{" "}
              Inspectors can access assigned tasks and capture photos offline,
              with automatic data synchronization when an internet connection is
              available.
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-[18px] text-accent">GPS Integration</h4>
          <ul>
            <li>
              <span className="font-bold">Location Verification:</span> Use
              device GPS to verify inspection locations during site visits.
            </li>
          </ul>
        </div>
      </div>
      <Spacer y={4} />
      <h3 className="text-[30px] text-primary bg-gray-100">
        Functional Requirements{" "}
      </h3>
      <Spacer y={2} />
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h5 className="text-[18px] text-accent">Admin</h5>
          <ul>
            <li>1. Manage inspector accounts.</li>
            <li>2. Assign and schedule inspection tasks.</li>
            <li>3. View and update inspection schedules.</li>
            <li>4. Access and review detailed inspection reports.</li>
            <li>5. Track inspection progress and status..</li>
          </ul>
        </div>
        <div>
          <h5 className="text-[18px] text-accent">Inspector</h5>
          <ul>
            <li>1. Receive and manage assigned tasks.</li>
            <li>2. Conduct inspections using predefined checklists.</li>
            <li>3. Capture photos and document inspection details.</li>
            <li>4. Update task status during inspections.</li>
            <li>5. Submit detailed reports for admin review.</li>
          </ul>
        </div>
      </div>
      <Spacer y={4} />
      <h3 className="text-[30px] text-primary bg-gray-100">Estimation </h3>
      <Spacer y={2} />
      <Table aria-label="Example static collection table">
        <TableHeader>
          <TableColumn>RESOURCE</TableColumn>
          <TableColumn>QUANTITY</TableColumn>
          <TableColumn>DURATION / MONTH</TableColumn>
          <TableColumn>COST / MONTH</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key="1">
            <TableCell>Frontend Developer</TableCell>
            <TableCell>1</TableCell>
            <TableCell>1</TableCell>
            <TableCell>30K</TableCell>
          </TableRow>
          <TableRow key="2">
            <TableCell>Backend Developer</TableCell>
            <TableCell>1</TableCell>
            <TableCell>1.5</TableCell>
            <TableCell>35K</TableCell>
          </TableRow>
          <TableRow key="3">
            <TableCell>Flutter Developer</TableCell>
            <TableCell>1</TableCell>
            <TableCell>2</TableCell>
            <TableCell>30K</TableCell>
          </TableRow>
          <TableRow key="4">
            <TableCell>Project Manager</TableCell>
            <TableCell>1</TableCell>
            <TableCell>3</TableCell>
            <TableCell>25K</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Spacer y={4} />
    </div>
  );
}

export default Page;
