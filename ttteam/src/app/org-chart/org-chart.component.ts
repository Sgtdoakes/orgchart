import { Component, OnInit } from '@angular/core';  
import { TreeNode } from 'primeng/api';  
import { Counselor } from '../models/counselor.model';
import data from './ttteam.json';
  
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
