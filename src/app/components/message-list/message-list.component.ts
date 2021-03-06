import { Component, OnInit, ViewChild, AfterViewInit, ViewChildren, QueryList, ContentChild, ContentChildren } from '@angular/core';
import { MessageComponent } from '../message/message.component';
import { CanComponentDeactivate } from '../../guards/confirmation/confirmation.guard';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit,AfterViewInit,CanComponentDeactivate {
  
  // @ViewChild(MessageComponent) messageComponent: MessageComponent;
  // @ViewChildren(MessageComponent) AllmessageComponent: QueryList<MessageComponent>;

  // @ContentChild(MessageComponent) firstProjectedMessageComponent: MessageComponent;
  // @ContentChild('tempMessage') tempProjectedMessageComponent: MessageComponent;
  // @ContentChildren(MessageComponent) allFirstProjectedMessageComponent: QueryList<MessageComponent>;


  // messageList: string[] = [
  //   'hi',
  //   'hello',
  //   'bye'
  // ];

  messages: Array<{ message: string}> = [];
  message:string = '';
  
  constructor() { 
    
  }

  ngOnInit() {

  }

  ngAfterViewInit(){
    // setTimeout(() => {
    //   this.messageComponent.message = 'Changed Message from MessageList Component';  
    //   this.AllmessageComponent.toArray().forEach(message => {
    //     console.log(message);
    //     message.message = 'Changed Message from MessageList Component';  
    //   });
    //   this.tempProjectedMessageComponent.message =' Changed from temp Reference';
      // this.firstProjectedMessageComponent.message = 'Changed ContentChild';
      // this.allFirstProjectedMessageComponent.toArray().forEach((message)=> {
      //   message.message = 'Changed Content';
      // })
    // });
  }

  addMessage(){
    this.messages.push({ message: this.message}); 
    this.message = '';
  }

  onMessageDelete($event){
    console.log($event);
    this.messages.splice($event,1);
  }

  changeFirstMessage(){
    this.messages[0].message = 'New and Changed Message!';
  }

  confirm():boolean{
    return confirm('Are you sure want to navigate away?');
  }

}
