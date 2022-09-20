import { Component, OnInit, ViewChild } from '@angular/core';  
import { TreeNode } from 'primeng/api';  
import { Counselor } from '../models/counselor.model';
import data from 'src/assets/ttteam.json';
  
@Component({  
  selector: 'app-orgchart',  
  templateUrl: './org-chart.component.html',  
  styleUrls: ['./org-chart.component.css']
})  


export class OrgchartComponent implements OnInit {  

  constructor() { }
    counselorNodes:TreeNode<Counselor>[] = [];
    selectedNode: TreeNode<Counselor>[] = [];
    counseleeCount = 0;
    seniorManagerCount = 6;
    managerCount = 6;
    assistantManagerCount = 6;
    seniorCount = 4;
    staffCount = 0;

    ngOnInit(): void {
        this.counselorNodes.push(this.counselorToTreeNode(data)); 
    }   
        
    countingCounselees(counselor: Counselor){
        this.counseleeCount = counselor.counselees.length;
    }

    getCountForRank(rank:string){
        switch (rank){
            case "Senior Manager":
                return this.seniorManagerCount;
            case "Manager": 
                return this.managerCount;
            case "Assistant Manager": 
                return this.assistantManagerCount;
            case "Senior": 
                return this.seniorCount;
            case "Staff/Assistant": 
                return this.staffCount;
            default:
                return 0;
        }
    }

    
    private counselorToTreeNode(counselor: Counselor): TreeNode {
        let counselorTreeNodes: TreeNode[] = [];
        
        for (let c of counselor.counselees) {
            counselorTreeNodes.push(this.counselorToTreeNode(c));
        }

        return {
            label: counselor.name,
            data: counselor,
            children: counselorTreeNodes,
            expanded: true
        };    
    }
}  
