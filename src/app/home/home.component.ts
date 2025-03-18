import { Component, ElementRef, Input, OnInit, ViewChild, AfterViewInit, ViewChildren, QueryList, HostListener } from '@angular/core'; 
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ActivatedRoute } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';
import { ScrollService } from '../scroll.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  // faCoffee = faCoffee;
  @ViewChild('circleWrapper', { static: false }) circleWrapper!: ElementRef;
  @ViewChildren('circle') circles!: QueryList<ElementRef>;
  @ViewChild('circle', { static: false }) circle!: ElementRef;
  @ViewChild('homeAbout', { static: true }) homeAbout!: ElementRef;
  @ViewChild('homeSection') homeSection: ElementRef | any;
  @ViewChild('contactSection') contactSection: ElementRef | any;
  resetting = false;

  constructor(private route: ActivatedRoute, private router: Router, private scrollService: ScrollService) { }

  svg1: string = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0,0,256,256"style="fill:#000000;"><defs><linearGradient x1="18" y1="15.125" x2="18" y2="25.288" gradientUnits="userSpaceOnUse" id="color-1_44014_gr1"><stop offset="0" stop-color="#5dddd4"></stop><stop offset="1" stop-color="#fc9219"></stop></linearGradient><linearGradient x1="32" y1="7.833" x2="32" y2="56.674" gradientUnits="userSpaceOnUse" id="color-2_44014_gr2"><stop offset="0" stop-color="#5dddd4"></stop><stop offset="1" stop-color="#fc9219"></stop></linearGradient></defs><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(4,4)"><path d="M18.612,15.501l0.285,1.412c0.223,1.104 1.085,1.967 2.189,2.189l1.412,0.285c0.668,0.135 0.668,1.09 0,1.225l-1.412,0.285c-1.104,0.223 -1.967,1.085 -2.189,2.189l-0.285,1.412c-0.135,0.668 -1.09,0.668 -1.225,0l-0.285,-1.412c-0.223,-1.104 -1.085,-1.967 -2.189,-2.189l-1.412,-0.285c-0.668,-0.135 -0.668,-1.09 0,-1.225l1.412,-0.285c1.104,-0.223 1.967,-1.085 2.189,-2.189l0.285,-1.412c0.135,-0.668 1.091,-0.668 1.225,0z" fill="url(#color-1_44014_gr1)"></path><path d="M53,27h-3v-4c0,-2.757 -2.243,-5 -5,-5h-2c-1.641,0 -3.088,0.806 -4,2.031c-0.912,-1.225 -2.359,-2.031 -4,-2.031h-2c-1.152,0 -2.201,0.407 -3.047,1.065c-0.481,-6.181 -5.652,-11.065 -11.953,-11.065c-6.617,0 -12,5.383 -12,12c0,4.74 2.726,8.946 7,10.9v2.1c-1.103,0 -2,0.897 -2,2v2c0,1.103 0.897,2 2,2h1v1c0,1.103 0.897,2 2,2h4c0,2.415 1.721,4.434 4,4.899v4.101c0,2.757 2.243,5 5,5h6c1.641,0 3.088,-0.806 4,-2.031c0.912,1.225 2.359,2.031 4,2.031h6c2.757,0 5,-2.243 5,-5v-4.101c2.279,-0.465 4,-2.484 4,-4.899v-10c0,-2.757 -2.243,-5 -5,-5zM14.364,29.307c-3.866,-1.512 -6.364,-5.165 -6.364,-9.307c0,-5.514 4.486,-10 10,-10c5.514,0 10,4.486 10,10c0,4.142 -2.498,7.795 -6.364,9.307l-0.636,0.249v3.444h-2v-3h-2v3h-2v-3.444zM13,35h10v2h-10zM16,40v-1h4v1zM56,42c0,1.654 -1.346,3 -3,3h-5c-1.654,0 -3,1.346 -3,3v2h2v-2c0,-0.552 0.448,-1 1,-1h4v4c0,1.654 -1.346,3 -3,3h-6c-1.654,0 -3,-1.346 -3,-3v-3v-3c0,-0.552 0.448,-1 1,-1h2v-2h-2c-1.654,0 -3,1.346 -3,3v3v3c0,1.654 -1.346,3 -3,3h-6c-1.654,0 -3,-1.346 -3,-3v-4h4c0.552,0 1,0.448 1,1v2h2v-2c0,-1.654 -1.346,-3 -3,-3h-5c-1.654,0 -3,-1.346 -3,-3v-2v-1h1c1.103,0 2,-0.897 2,-2v-2c0,-1.103 -0.897,-2 -2,-2v-2.1c1.113,-0.509 2.118,-1.173 3,-1.957v0.057h2v3h2v-7v-2c0,-1.654 1.346,-3 3,-3h2c1.654,0 3,1.346 3,3v8v1c0,0.552 -0.448,1 -1,1h-2v2h2c1.654,0 3,-1.346 3,-3v-1v-8c0,-1.654 1.346,-3 3,-3h2c1.654,0 3,1.346 3,3v9h2v-3h3c1.654,0 3,1.346 3,3z" fill="url(#color-2_44014_gr2)"></path></g></g></svg>';
  svg2: string = '<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0,0,256,256"style="fill:#000000;"><defs><linearGradient x1="20.499" y1="13.001" x2="20.499" y2="23.584" gradientUnits="userSpaceOnUse" id="color-1_44045_gr1"><stop offset="0" stop-color="#75e9e1"></stop><stop offset="1" stop-color="#fc9219"></stop></linearGradient><linearGradient x1="24.511" y1="5.27" x2="26.011" y2="59.777" gradientUnits="userSpaceOnUse" id="color-2_44045_gr2"><stop offset="0" stop-color="#6bd8c7"></stop><stop offset="1" stop-color="#fc9219"></stop></linearGradient><linearGradient x1="31.109" y1="5.089" x2="32.609" y2="59.595" gradientUnits="userSpaceOnUse" id="color-3_44045_gr3"><stop offset="0" stop-color="#6bd8c7"></stop><stop offset="1" stop-color="#fc9219"></stop></linearGradient></defs><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(4,4)"><path d="M25,14.001c-5,0 -9.002,3.999 -9.002,8.999h9.002z" fill="url(#color-1_44045_gr1)"></path><path d="M24.999,10c-7.169,0 -13.002,5.832 -13.002,13.002c0,7.17 5.833,13.002 13.002,13.002c7.169,0 13.002,-5.832 13.002,-13.002c0,-7.17 -5.833,-13.002 -13.002,-13.002zM24.999,34.003c-6.066,0 -11.001,-4.935 -11.001,-11.001c0,-6.066 4.935,-11.001 11.001,-11.001c6.066,0 11.001,4.935 11.001,11.001c0,6.066 -4.935,11.001 -11.001,11.001z" fill="url(#color-2_44045_gr2)"></path><path d="M54.77,48.559l-8.752,-9.864c-0.719,-0.812 -1.995,-0.92 -2.845,-0.243l-2.486,1.973l-4.125,-4.994c3.337,-3.106 5.439,-7.521 5.439,-12.429c0,-9.375 -7.627,-17.002 -17.002,-17.002c-9.375,0 -17.002,7.627 -17.002,17.002c0,9.375 7.627,17.002 17.002,17.002c3.749,0 7.207,-1.234 10.021,-3.298l4.099,4.963l-2.366,1.877c-0.434,0.344 -0.698,0.832 -0.746,1.374c-0.047,0.539 0.127,1.06 0.49,1.469l8.753,9.865c1.022,1.152 2.489,1.746 3.965,1.746c1.169,0 2.344,-0.373 3.307,-1.137l1.607,-1.274c1.08,-0.858 1.739,-2.068 1.856,-3.406c0.115,-1.324 -0.316,-2.611 -1.215,-3.624zM9.997,23.002c0,-8.272 6.73,-15.002 15.002,-15.002c8.272,0 15.002,6.73 15.002,15.002c0,8.272 -6.729,15.002 -15.002,15.002c-8.273,0 -15.002,-6.73 -15.002,-15.002zM48.642,44.666l-6.467,5.133l-1.477,-1.656l6.472,-5.136zM44.418,40.018c0.013,-0.01 0.03,-0.014 0.049,-0.014c0.022,0 0.045,0.007 0.055,0.018l1.319,1.487l-6.476,5.139l-1.368,-1.534zM52.885,54.022l-1.607,1.274c-1.361,1.081 -3.394,0.915 -4.532,-0.369l-3.239,-3.632l6.464,-5.13l3.303,3.722c0.53,0.598 0.785,1.351 0.718,2.122c-0.068,0.786 -0.462,1.501 -1.107,2.013z" fill="url(#color-3_44045_gr3)"></path></g></g></svg>';
  svg3: string = '<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0,0,256,256"style="fill:#000000;"><defs><linearGradient x1="32" y1="7" x2="32" y2="55.84" gradientUnits="userSpaceOnUse" id="color-1_44031_gr1"><stop offset="0" stop-color="#5dddd4"></stop><stop offset="1" stop-color="#fc9219"></stop></linearGradient><linearGradient x1="48.5" y1="7" x2="48.5" y2="55.84" gradientUnits="userSpaceOnUse" id="color-2_44031_gr2"><stop offset="0" stop-color="#5dddd4"></stop><stop offset="1" stop-color="#fc9219"></stop></linearGradient><linearGradient x1="20.041" y1="7" x2="20.041" y2="55.84" gradientUnits="userSpaceOnUse" id="color-3_44031_gr3"><stop offset="0" stop-color="#5dddd4"></stop><stop offset="1" stop-color="#fc9219"></stop></linearGradient><linearGradient x1="20" y1="24.25" x2="20" y2="34.27" gradientUnits="userSpaceOnUse" id="color-4_44031_gr4"><stop offset="0" stop-color="#5dddd4"></stop><stop offset="1" stop-color="#f5ae52"></stop></linearGradient><linearGradient x1="38" y1="24.25" x2="38" y2="34.27" gradientUnits="userSpaceOnUse" id="color-5_44031_gr5"><stop offset="0" stop-color="#5dddd4"></stop><stop offset="1" stop-color="#f5ae52"></stop></linearGradient><linearGradient x1="29" y1="34.875" x2="29" y2="45.128" gradientUnits="userSpaceOnUse" id="color-6_44031_gr6"><stop offset="0" stop-color="#5dddd4"></stop><stop offset="1" stop-color="#f5ae52"></stop></linearGradient></defs><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(4,4)"><path d="M54.996,37.446c-0.974,-1.03 -2.112,-1.836 -3.351,-2.414c0.234,-1.326 0.355,-2.677 0.355,-4.032c0,-12.683 -10.317,-23 -23,-23c-12.683,0 -23,10.317 -23,23c0,12.683 10.317,23 23,23c3.32,0 6.504,-0.692 9.485,-2.047c2.019,2.468 5.085,4.047 8.515,4.047c6.065,0 11,-4.935 11,-11c0,-2.82 -1.066,-5.503 -3.004,-7.554zM29,52c-11.579,0 -21,-9.421 -21,-21c0,-11.579 9.421,-21 21,-21c11.579,0 21,9.421 21,21c0,1.126 -0.095,2.247 -0.272,3.352c-0.88,-0.224 -1.792,-0.352 -2.728,-0.352c-6.065,0 -11,4.935 -11,11c0,1.91 0.491,3.706 1.35,5.273c-2.631,1.145 -5.434,1.727 -8.35,1.727zM47,54c-4.963,0 -9,-4.037 -9,-9c0,-4.963 4.037,-9 9,-9c2.5,0 4.824,1.001 6.543,2.819c1.584,1.679 2.457,3.873 2.457,6.181c0,4.963 -4.037,9 -9,9z" fill="url(#color-1_44031_gr1)"></path><path d="M52.793,41.793l-5.793,5.793l-2.793,-2.793l-1.414,1.414l4.207,4.207l7.207,-7.207z" fill="url(#color-2_44031_gr2)"></path><path d="M11.082,24.667l1.885,0.666c1.695,-4.796 5.57,-8.671 10.367,-10.366c1.816,-0.642 3.723,-0.967 5.666,-0.967v-2c-2.171,0 -4.302,0.364 -6.332,1.082c-5.361,1.894 -9.692,6.225 -11.586,11.585z" fill="url(#color-3_44031_gr3)"></path><path d="M20,25c-2.20914,0 -4,1.79086 -4,4c0,2.20914 1.79086,4 4,4c2.20914,0 4,-1.79086 4,-4c0,-2.20914 -1.79086,-4 -4,-4z" fill="url(#color-4_44031_gr4)"></path><path d="M38,25c-2.20914,0 -4,1.79086 -4,4c0,2.20914 1.79086,4 4,4c2.20914,0 4,-1.79086 4,-4c0,-2.20914 -1.79086,-4 -4,-4z" fill="url(#color-5_44031_gr5)"></path><path d="M34,36h-10c-0.552,0 -1,0.448 -1,1v1c0,3.314 2.686,6 6,6c3.314,0 6,-2.686 6,-6v-1c0,-0.552 -0.448,-1 -1,-1z" fill="url(#color-6_44031_gr6)"></path></g></g></svg>';
  svg4: string = '<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0,0,256,256"style="fill:#000000;"><defs><linearGradient x1="16" y1="27.043" x2="16" y2="35.851" gradientUnits="userSpaceOnUse" id="color-1_UeyNgv1VXSvl_gr1"><stop offset="0" stop-color="#5dddd4"></stop><stop offset="1" stop-color="#fc9219"></stop></linearGradient><linearGradient x1="31.998" y1="3.425" x2="31.998" y2="51.347" gradientUnits="userSpaceOnUse" id="color-2_UeyNgv1VXSvl_gr2"><stop offset="0" stop-color="#5dddd4"></stop><stop offset="1" stop-color="#fc9219"></stop></linearGradient><linearGradient x1="48" y1="3.425" x2="48" y2="51.347" gradientUnits="userSpaceOnUse" id="color-3_UeyNgv1VXSvl_gr3"><stop offset="0" stop-color="#5dddd4"></stop><stop offset="1" stop-color="#fc9219"></stop></linearGradient><linearGradient x1="48" y1="3.425" x2="48" y2="51.347" gradientUnits="userSpaceOnUse" id="color-4_UeyNgv1VXSvl_gr4"><stop offset="0" stop-color="#5dddd4"></stop><stop offset="1" stop-color="#fc9219"></stop></linearGradient></defs><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(4,4)"><circle cx="16" cy="32" r="5" fill="url(#color-1_UeyNgv1VXSvl_gr1)"></circle><g><path d="M54.364,41.636c-2.765,-2.763 -6.891,-3.34 -10.235,-1.75l-1.078,-1.078c-0.887,-0.886 -2.286,-1.069 -3.397,-0.568l-5.775,-5.775c-0.175,-0.175 -0.371,-0.32 -0.565,-0.465c0.195,-0.145 0.391,-0.29 0.565,-0.465l5.68,-5.68c0.406,0.193 0.843,0.301 1.284,0.301c0.769,0 1.537,-0.293 2.122,-0.878l1.076,-1.076c1.196,0.572 2.51,0.884 3.874,0.884c2.403,0 4.664,-0.937 6.363,-2.637c3.509,-3.509 3.509,-9.219 0,-12.728c-3.509,-3.509 -9.219,-3.512 -12.728,0c-1.7,1.699 -2.637,3.96 -2.637,6.363c0,1.365 0.312,2.679 0.884,3.875l-1.076,1.075c-0.921,0.921 -1.105,2.292 -0.577,3.406l-5.68,5.68c-0.566,0.568 -1.319,0.88 -2.121,0.88h-1.527c-0.414,-1.161 -1.514,-2 -2.816,-2h-1.525c-1.239,-3.49 -4.565,-6 -8.475,-6c-4.963,0 -9,4.037 -9,9c0,4.963 4.037,9 9,9c3.91,0 7.236,-2.51 8.475,-6h1.525c1.302,0 2.402,-0.839 2.816,-2h1.527c0.802,0 1.556,0.313 2.122,0.879l5.764,5.764c-0.19,0.398 -0.3,0.832 -0.3,1.286c0,0.802 0.313,1.556 0.879,2.121l1.078,1.078c-1.591,3.344 -1.015,7.471 1.75,10.236c1.755,1.754 4.06,2.631 6.364,2.631c2.304,0 4.609,-0.877 6.364,-2.631c3.509,-3.51 3.509,-9.218 0,-12.728zM42.965,11.136c1.364,-1.364 3.157,-2.047 4.949,-2.047c1.793,0 3.586,0.683 4.95,2.047c2.729,2.729 2.729,7.17 0,9.899c-1.322,1.322 -3.08,2.051 -4.949,2.051c-1.87,0 -3.628,-0.729 -4.95,-2.051c-1.322,-1.322 -2.051,-3.08 -2.051,-4.95c0,-1.869 0.729,-3.627 2.051,-4.949zM41.551,22.449c0.238,0.238 0.49,0.458 0.749,0.666l-0.749,0.749c-0.379,0.378 -1.036,0.377 -1.415,0c-0.39,-0.391 -0.39,-1.024 0,-1.415l0.75,-0.749c0.207,0.259 0.427,0.511 0.665,0.749zM16,39c-3.859,0 -7,-3.141 -7,-7c0,-3.859 3.141,-7 7,-7c3.859,0 7,3.141 7,7c0,3.859 -3.141,7 -7,7zM26,33h-1.059c0.037,-0.329 0.059,-0.662 0.059,-1c0,-0.338 -0.022,-0.671 -0.059,-1h1.059c0.552,0 1,0.448 1,1c0,0.552 -0.448,1 -1,1zM40.222,41.635c-0.189,-0.188 -0.293,-0.438 -0.293,-0.706c0,-0.267 0.104,-0.518 0.293,-0.707c0.38,-0.377 1.036,-0.378 1.414,0l0.749,0.749c-0.258,0.207 -0.51,0.426 -0.749,0.665c-0.239,0.239 -0.458,0.49 -0.665,0.749zM52.95,52.95c-2.729,2.729 -7.171,2.729 -9.9,0c-2.729,-2.729 -2.729,-7.171 0,-9.9c2.73,-2.729 7.172,-2.729 9.9,0c2.729,2.729 2.729,7.171 0,9.9z" fill="url(#color-2_UeyNgv1VXSvl_gr2)"></path><path d="M48,21c1.336,0 2.592,-0.521 3.535,-1.465c0.944,-0.943 1.465,-2.199 1.465,-3.535c0,-1.336 -0.521,-2.592 -1.465,-3.535c-0.943,-0.944 -2.199,-1.465 -3.535,-1.465c-1.336,0 -2.592,0.521 -3.535,1.465c-0.944,0.943 -1.465,2.199 -1.465,3.535c0,1.336 0.521,2.591 1.465,3.535c0.944,0.944 2.199,1.465 3.535,1.465zM45.879,13.879c0.566,-0.566 1.319,-0.879 2.121,-0.879c0.802,0 1.555,0.313 2.121,0.879c0.566,0.566 0.879,1.319 0.879,2.121c0,0.802 -0.313,1.555 -0.879,2.121c-1.133,1.133 -3.109,1.133 -4.242,0c-0.566,-0.566 -0.879,-1.319 -0.879,-2.121c0,-0.802 0.313,-1.555 0.879,-2.121z" fill="url(#color-3_UeyNgv1VXSvl_gr3)"></path><path d="M51.535,44.465c-0.943,-0.944 -2.199,-1.465 -3.535,-1.465c-1.336,0 -2.591,0.521 -3.535,1.465c-0.944,0.944 -1.465,2.199 -1.465,3.535c0,1.336 0.521,2.592 1.465,3.535c0.943,0.944 2.199,1.465 3.535,1.465c1.336,0 2.592,-0.521 3.535,-1.465c0.944,-0.943 1.465,-2.199 1.465,-3.535c0,-1.336 -0.521,-2.592 -1.465,-3.535zM50.121,50.121c-1.133,1.133 -3.109,1.133 -4.242,0c-0.566,-0.566 -0.879,-1.319 -0.879,-2.121c0,-0.802 0.313,-1.555 0.879,-2.121c0.566,-0.566 1.319,-0.879 2.121,-0.879c0.802,0 1.555,0.313 2.121,0.879c0.566,0.566 0.879,1.319 0.879,2.121c0,0.802 -0.312,1.555 -0.879,2.121z" fill="url(#color-4_UeyNgv1VXSvl_gr4)"></path></g></g></g></svg>';
  cards = [
    {svgContent: this.svg1, title: 'Creative', text: 'Exploring inventive solutions, thinking outside the box to tackle complex problems. My creativity enables me to design elegant and user-friendly interfaces.' },
    {svgContent: this.svg2, title: 'Curious', text: 'Learning and adapting to new technologies, while exploring different programming languages and frameworks, always seeking to deepen my understanding and skills.' },
    {svgContent: this.svg3, title: 'Conditioned', text: 'Staying active doing sports and fitness to stay sharp and focused. I believe that a healthy body leads to a healthy mind.'},
    {svgContent: this.svg4, title: 'Connected', text: 'Communicating and collaborating with others to create a positive and productive environment, both inside and outside of work.'}
    // Add more cards as needed
  ];

   customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    stagePadding: window.innerWidth < 770 ? 20 : 150,
    margin: 40,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },

  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    let stagePadding;

  if (event.target.innerWidth < 770) {
    stagePadding = 20;
  } else if (event.target.innerWidth >= 770 && event.target.innerWidth < 1100) {
    stagePadding = 40;
  } else {
    stagePadding = 150;
  }

  this.customOptions = {
    ...this.customOptions,
    stagePadding: stagePadding
  };
  }
  projects = [
    {title: 'Fitness Tracker App - Angular', link:'https://github.com/RasmusJuelN/ShapeShifter', description: 'My Project for H3 - a 6 week project made using Angular. <br> It is a fullstack fitness tracker app, in which you can save, update and delete workouts with exercises. It contains a login and register page using JWT and password hashing for security. It also includes a BMI tracker.', skills:['C#', 'Angular/TS', 'ASP.NET Web API', 'HTML', 'CSS', 'Github', 'JWT', 'Entity Framework', 'MS SQL'], image: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg'},
    {title: 'Music Player App - Angular', link:'https://github.com/TempoTuneCorp/TempoTuneCorp.github.io', description: 'Group project in Angular. It contains a music player with a list of songs, which can be added to a favourites list. It also has a profile page with profile data that can be edited as desired. I learned how to use github branching and version control, while working with multiple people.', skills:['C#', 'Angular/TS', 'JS', 'ASP.NET Web API', 'HTML', 'CSS', 'Github', 'JWT', 'Entity Framework', 'MS SQL'], image: 'https://img.freepik.com/free-photo/beautiful-mountains-landscape_23-2151151093.jpg'},
    {title: 'Temperature sensor on ESP32', link:'https://github.com/RasmusJuelN/WebSocket', description: 'IoT project using ESP32 microcontroller. <br> It is made to orchestrate the interactions between various hardware components, web server functionalities, and data logging mechanisms to create a temperature monitoring and logging system accessible over the web.', skills:['C++', 'HTML', 'Arduino JSON', 'ESP32', 'WebSocket', 'SD/SPIFFS', 'Data Logging', 'Async Webserver'], image: 'https://images.assetsdelivery.com/compings_v2/nuttawut2981/nuttawut29811810/nuttawut2981181000061.jpg'},
    {title: 'Python with ETL', link:'https://github.com/RasmusJuelN/pyspark-devcontainer', description: 'Python project with ETL (Extract, Transform, Load) pipeline, to process real-time data on electricity production in Denmark.<br> I am using PySpark for data transformation and summarization, Matplotlib for data visualization, and standard Python libraries for other tasks such as HTTP requests and time handling.', skills:['Python', 'Docker', 'PySpark pandas & sql', 'HTTP requests', 'Github'], image: 'https://img.freepik.com/premium-photo/fantasy-landscape-with-mountains-starry-sky_900706-3910.jpg'},
    {title: 'Energy project - React', link:'https://github.com/PurpleGita/tec-energy-web-app', description: 'Working on a react project to show energy consumption for specific rooms and floors in a building. The project started out using ESP32 to get energy data from a electrical board, but is now using Shelly devices to get the data. The data is then send to a influx database and retrieved via api in a react application to show energy usage in different charts.', skills:['React', 'Tailwind', 'TS/JS', 'Data Visualization', 'Docker', 'InfluxDb', 'Github'], image: 'https://t3.ftcdn.net/jpg/05/51/89/58/360_F_551895859_ZuQWVnCA7DGMf8PDOLVeNiygUS4AjGc0.jpg'},
  
  ]

 

  ngAfterViewInit() {
    this.handleMouseMove();
    this.handleMouseLeave();

    this.scrollService.changeHomeSection(this.homeSection.nativeElement);
    this.scrollService.changeContactSection(this.contactSection.nativeElement);
  }


  ngOnInit() {
    // this.route.fragment.subscribe(fragment => {
    //   if (fragment) {
    //     const element = document.getElementById(fragment);
    //     if (element) element.scrollIntoView({ behavior: 'smooth' });
    //   }
    // });



  }

  scrollToAbout() {
    this.homeAbout.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  goToContact() {
    this.contactSection.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  handleMouseMove() {
    this.circles.forEach((circle) => {
      circle.nativeElement.addEventListener('mousemove', (e: any) => {
        if (this.resetting) return;
        const rect = circle.nativeElement.getBoundingClientRect();
        const x = e.clientX - rect.left; //x position within the element.
        const y = e.clientY - rect.top;  //y position within the element.

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const diffX = centerX - x;
        const diffY = centerY - y;

        const moveX = diffX / centerX * -70; // max move 50px
        const moveY = diffY / centerY * -70; // max move 50px

        circle.nativeElement.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    });
  }

  handleMouseLeave() {
    this.circles.forEach((circle) => {
      circle.nativeElement.addEventListener('mouseleave', () => {
        this.resetting = true;
        circle.nativeElement.style.transform = `translate(0px, 0px)`;
        setTimeout(() => this.resetting = false, 1);
      });
    });
  }
}


