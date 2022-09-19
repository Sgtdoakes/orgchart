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

    ngOnInit(): void {
        this.counselorNodes.push(this.counselorToTreeNode(data)); 
    }   
        
    countingCounselees(counselor: Counselor){
        this.counseleeCount = counselor.counselees.length;
    }

    getWarningForRank(rank:string){
        switch (rank){
            case "Senior Manager":
                return 8
            case "Manager": 
                return 8;
            case "Assistant Manager": 
                return 8;
            case "Senior": 
                return 6;
            default:
                return 0;
        }
    }
    getDangerForRank(rank:string){
        switch (rank){
            case "Senior Manager":
                return 9;
            case "Manager": 
                return 9;
            case "Assistant Manager": 
                return 9;
            case "Senior": 
                return 7;
            case "Staff/Assistant": 
                return 1;
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
