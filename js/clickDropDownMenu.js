/**
 * Copyright (c) 2014 Cesar Anton Dorantes reicek@gmail.com
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 **/

// ************************************
//  jQuery CSS click to drop-down Menu
// ************************************
$(function()
{
    $('.menu').click(function() // Detect and show selected menu
    {
        $('.sub').css('display','none');
        $(this).children('.sub').css('display','inline');
    });
	// Hide menu when the user clicks somewhere else
	$('article').click(function() 
    {
        $('.sub').css('display','none');
    });
	$('aside').click(function() 
    {
        $('.sub').css('display','none');
    });
	$('footer').click(function() 
    {
        $('.sub').css('display','none');
    });
});
