import { Component, OnInit } from '@angular/core';  
import { SelectItem, FilterService, FilterMatchMode } from "primeng/api";
import { TreeNode } from 'primeng/api';  
import { Counselor } from '../models/counselor.model';
import { JsonService } from '../services/json.service';
  
@Component({  
  selector: 'app-orgchart',  
  templateUrl: './org-chart.component.html',  
  styleUrls: ['./org-chart.component.css']
})  


export class OrgchartComponent implements OnInit {  

  constructor(private jsonService:JsonService,
    private filterService: FilterService) { }
    counselorNodes:TreeNode<Counselor>[] = [];
    selectedNode: TreeNode<Counselor>[] = [];
    matchModeOptions: SelectItem[] = [];
    cols: any[] = [];
    counseleeCount = 0;
    seniorManagerCount = 6;
    managerCount = 6;
    assistantManagerCount = 6;
    seniorCount = 4;
    staffCount = 0;

    ngOnInit(): void {
        this.jsonService.getCounselors().subscribe(json => {            
            this.counselorNodes = [
                {
                    label: "Ajay Samuel",
                    data: {avatar: "/sites/PowerAutomate101/Shared%20Documents/ttteam/assets/fotos/AjaySamuel.jpg",
                            name: "Ajay Samuel",
                            email: "",
                            rank: "Executive Director",
                        type: "person",
                        counselees: []},
                    expanded: true,
                    children: counselorToTreeNode(<Counselor>json).children
                }
             ];
        });
        const customFilterName = "custom-equals";
        
        this.filterService.register(
            customFilterName,
            (value: { toString: () => string; } | null | undefined, filter: string | null | undefined) => {
              if (filter === undefined || filter === null || filter.trim() === "") {
                return true;
              }
      
              if (value === undefined || value === null) {
                return false;
              }
      
              return value.toString() === filter.toString();
            }
          );

          this.cols = [
            { field: "rank", header: "Rank" },
            { field: "counselees", header: "Counselees" },
            { field: "color", header: "Color" }
          ];
      
          this.matchModeOptions = [
            { label: "Custom Equals", value: customFilterName },
            { label: "Starts With", value: FilterMatchMode.STARTS_WITH },
            { label: "Contains", value: FilterMatchMode.CONTAINS }
          ];
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
}  
function counselorToTreeNode(counselor: Counselor) {    
    let counselorTreeNodes: TreeNode[] = [];
        
    for (let c of counselor.counselees) {
        counselorTreeNodes.push(counselorToTreeNode(c));
    }
    let expanded = false;

    if(counselor.name == 'Gustavo Orteu' || counselor.name ==  'Sabrina M Silva') {
        expanded = true
    }

    return {
        label: counselor.name,
        data: counselor,
        children: counselorTreeNodes,
        expanded: expanded
    };
}